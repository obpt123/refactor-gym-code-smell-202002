#Message Chain

数据处理链太长了
```
 private Map<String, Map<String, List<Dealer>>> groupData(List<DsmRsmMap> hierarchyDealers) {
        return hierarchyDealers.stream()
                               .collect(groupingBy(DsmRsmMap::getRsmName,
                                                   groupingBy(DsmRsmMap::getDsmName,
                                                              flatMapping(map -> map.getDealers().stream(),
                                                                          toList()))));
    }

```