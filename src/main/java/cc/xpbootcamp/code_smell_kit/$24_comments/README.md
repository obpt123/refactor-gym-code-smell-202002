# Comments

举例1:

```Java
@Override
	public void init(Config config) {
		MapVisit visit = new MapVisit();
		List<Road> roads = new ArrayList<>();

		config.getPreliminaryResults().forEach((k, v) -> {
			v.forEach((city, value) -> {
				if (value != Integer.MAX_VALUE) {
					Logger.debug(k + "->" + city + " : " + value);
					roads.add(new Road(k, city));
				}
			});
		});

		// 无效的起始节点
		Set<String> invalidBegins = new HashSet<>();
		// 无效的结束节点
		Set<String> invalidEnds = new HashSet<>();
		Set<String> allNodes = visit.getAllNodes(roads);
		// 获取到无效开始节点和无效结束点
		visit.filterInvalidNode(allNodes, roads, invalidBegins, invalidEnds);
		Logger.debug("Invalid Node:" + invalidEnds);
		// 获取需要删除的路径
		Set<Road> invalidRoads = visit.deleteRoad(invalidBegins, invalidEnds, roads);
		Logger.debug("Invalid roads:" + invalidRoads);
		// 删除无效的路径
		roads.removeAll(invalidRoads);

		practise = new Practise(roads);
	}
```