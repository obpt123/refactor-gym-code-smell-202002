#Feature Envy
RequestHistoryService里的函数基本是调用了 RequestHistoryRepository， CmsService 和AuditService 的方法;
```  
@Slf4j
@Service
public class RequestHistoryService {


    private RequestHistoryRepository requestHistoryRepository;
    private CmsService cmsService;
    private AuditService auditService;

    @Autowired
    public RequestHistoryService(RequestHistoryRepository requestHistoryRepository,
                                 CmsService cmsService,
                                 AuditService auditService) {
        this.requestHistoryRepository = requestHistoryRepository;
        this.cmsService = cmsService;
        this.auditService = auditService;
    }


    public List<RequestHistory> findByApplicationNumber(String applicationNumber) {
        return requestHistoryRepository.findByApplicationNumber(applicationNumber);
    }

    private static String generateId(String applicationNumber, Date requestDate) {
        return MessageFormat.format("{0}/{1}", applicationNumber, requestDate.toInstant());
    }

    @Async
    public void save(DdBankRequest ddBankRequest) {
        Date requestTime = new Date();
        String applicationNumber = ddBankRequest.getData().getApplicationNumber();
        RequestHistory requestHistory = RequestHistory.builder()
                .applicationNumber(applicationNumber)
                .companyId(ddBankRequest.getData().getCompanyId())
                .requestTime(requestTime)
                .actionType(ddBankRequest.getActionType().name())
                .id(generateId(applicationNumber, requestTime))
                .request((JSONObject) JSONObject.toJSON(ddBankRequest))
                .build();
        requestHistoryRepository.save(requestHistory);
        log.info(MessageFormat.format("save request of {0}", applicationNumber));
    }

    public CmsServiceResponse resubmitRequestById(String id, boolean autoActivated) {
        RequestHistory requestHistory = requestHistoryRepository.findById(id)
                .orElseThrow(notFoundException("Not found the request history  [%s] information.", id));
        return proxy(autoActivated, requestHistory);
    }


    private CmsServiceResponse proxy(boolean autoActivated, RequestHistory requestHistory) {
        CmsInsertDdBankRequest cmsInsertDdBankRequest = CmsInsertDdBankRequest
                .builder().object(requestHistory.getRequest().getJSONObject("data")).build();
        log.info("{} is manually resubmitted, auto_activated={}", requestHistory.getApplicationNumber(), autoActivated);
        cmsInsertDdBankRequest.getObject().put("Auto_Activate", autoActivated);

        SystemLogRequest systemLogRequest = SystemLogRequest.builder().gemId("SYSTEM").companyId(0)
                .parameters(requestHistory.getRequest().getJSONObject("data")).logType(LogType.RESUBMIT_CMS).build();
        auditService.asyncSaveSystemLog(systemLogRequest);

        return cmsService.sendToCms(cmsInsertDdBankRequest);
    }
}   
```
