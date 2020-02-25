# Long Method

Example1:

```java
private  List<List<String>> findByCond(String type,String start,String end,int min,int max,int current){
        if(current<=max){
            //get child
            Set<Line> lines=initMap.get(start);
            if (null!=lines && !lines.isEmpty()){
                List<List<String>> result = new LinkedList<>();
                //the edge
                if(current>=min && start.equals(end)){
                    List<String> trace=new LinkedList<>();
                    trace.add(start);
                    result.add(trace);
                }
                //the recursive
                for(Line each:lines){
                    List<List<String>> subList = new LinkedList<>();
                    if (TraverseEnum.STOP.getCode().equals(type)){
                         subList=findByCond(TraverseEnum.STOP.getCode(),each.getTo(),end,min,max,current+1);
                    }
                    if (TraverseEnum.LENGTH.getCode().equals(type)){
                        subList=findByCond(TraverseEnum.LENGTH.getCode(),each.getTo(),end,min,max,current+each.getDistance());
                    }
                    if(null == subList || subList.isEmpty()){
                        continue;
                    }
                    for(List<String> eachTrace:subList){
                        eachTrace.add(0,start);
                    }
                    result.addAll(subList);
                }
                return result;
            }
        }
        return null;
    }
```