#long parameter_list

Example04:
```
  @Transactional
  public void goodReceiving(GoodsReceived event) {
    goodReceiving(
        event.getSalesOrderNumber(),
        event.getSalesLineNumber(),
        event.getReceivedQuantity(),
        event.getPurchaseOrderNumber(),
        rLineStatus,
        null);
  }

  @Transactional
  public void ictGoodReceiving(GoodsReceived event, ShoppingCartItemSaved supplyShoppingCartItem) {
    log.info("ict good received supply shopping cart item: {}", supplyShoppingCartItem);
    goodReceiving(
        event.getSalesOrderNumber(),
        event.getSalesLineNumber(),
        event.getReceivedQuantity(),
        event.getPurchaseOrderNumber(),
        gLineStatus,
        supplyShoppingCartItem);
  }

  private void goodReceiving(
    String orderNumber, Integer lineNumber, Double receiveQuantity, Long purchaseOrderNumber, PartLineStatus nextStatus, ShoppingCartItemSaved supplyShoppingCartItem) {
    log.info("good receive quantity: {}", receiveQuantity);
    if (receiveQuantity <= ZERO) {
      return;
    }

```
举例二
From [Github](https://github.com/lkp7321/sour/blob/06ac40e140bad1dc1e7b3590ce099bc02ae065f2/fxadmin/src/main/java/com/ylxx/fx/service/impl/LogfileCmdServiceImpl.java)
```java
/**
 * 查询审计日志
 */
@Override
public PageInfo<Logfile> selectMng_logAll(String strusnm,String usnm,String trdt,String endt,String handle,Integer pageNo, Integer pageSize) {
  List<Logfile> list = null;
  pageNo = pageNo == null?1:pageNo;
    pageSize = pageSize == null?10:pageSize;
    PageHelper.startPage(pageNo, pageSize);
  try {
    list = logfilecmdMap.selectMng_logAll(strusnm,usnm,trdt,endt,handle);
  } catch (Exception e) {
    log.error(e.getMessage(), e);
  }
  return new PageInfo<Logfile>(list);
}
```