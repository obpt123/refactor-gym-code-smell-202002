# Loop

举例1:

```Java
private List<Item> getItemsOrderByUser(Account account) {
        List<ReservedOrder> reserveOrders = reserveOrderService.findAllOrdersByAccountId(account.getAccount_id());
        List<Item> items = new ArrayList<>();
        for (ReservedOrder reserveOrder : reserveOrders) {
            items.add(reserveOrder.getItem());
        }
        return items;
    }
```