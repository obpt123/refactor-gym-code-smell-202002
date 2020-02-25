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
