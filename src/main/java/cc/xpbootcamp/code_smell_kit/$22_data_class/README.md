# Comments

举例1:

```Java
public class ProductItem {
	private String description;
	private BigDecimal price;
	private int quantity;

	public ProductItem(String description, double price, int quantity) {
		this.description = description;
		this.price = new BigDecimal(Double.toString(price));
		this.quantity = quantity;
	}

	public String getDescription() {
		return description;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public Integer getQuantity() {
		return quantity;
	}

}
```