# primitive obsession

业务中本身是要求返回三种状态 rate为0 rate为空或者rate 有值，这里为了只返回一个String 用N、Y、""表示这三种状态
```
 private String toShoppingCartDiscountMasterNotFound(SellingPrice sellingPrice) {
    if (sellingPrice.getDiscountTooBig()) {
      return "";
    }
    return Strings.emptyToNull(
        sellingPrice
            .getDiscount()
            .map(SellingPriceDiscount::getRate)
            .map(rate -> BigDecimal.ZERO.compareTo(rate) == 0 ? "N" : "")
            .orElse("Y"));
  }
```