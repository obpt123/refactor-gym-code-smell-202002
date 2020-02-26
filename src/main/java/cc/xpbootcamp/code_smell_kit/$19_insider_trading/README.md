# insider_trading

Example 两个类循环依赖，且需要访问互相的属性

```java
public class CyclicDependencies {
    public static void main(String args[]){
        Chicken c = new Chicken() ;
        //Egg e = new Egg() ;
    }
}
 
class Chicken{
    private Egg e ;
    private int age ;
    public Chicken(){
        e = new Egg() ;
        setAge(10) ;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    public int getWeight() {
        return e.getWeight();
    }
 
}
class Egg{
    private Chicken chicken ;
    private int weight ;
    public Egg(){
        chicken = new Chicken() ;
        setWeight(1) ;
    }
    public int getWeight() {
        return weight;
    }
    public void setWeight(int weight) {
        this.weight = weight;
    }
    public int getAge() {
        return chicken.getAge();
    }

}
```