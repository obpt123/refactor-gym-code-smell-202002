# divergent_change

Example

```java
class Person {
    private String name;
    private String officeAreaCode;
    private String officeNumber;
    
    public String getTelephoneNumber() {
        return this.officeAreaCode + "-" + this.officeNumber;
    }
    
    public String toString() {
        return "name: " + this.name 
                + "officeAreaCode: " + this.officeAreaCode 
                + "officeNumber: " + this.officeNumber;
    }
}
```