# middle_man

Example

```java
class Consumer{
    private Producer producer;
    
    public Consumer getInstance() {
        return producer.getConsumer();
    }
}

class Producer {
    private Consumer consumer;

    Producer(Consumer consumer) {
        this.consumer = consumer;
    }
    public Consumer getConsumer() {
        return consumer;
    }
}

public class client {
    Consumer consumer;
    Consumer consumer1 = consumer.getInstance();
}
```