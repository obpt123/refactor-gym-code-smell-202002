# alternative_classes_with_different_interfaces

Example

```java
class UserNotFound extends Exception {
    UserNotFount() {
        throw new Exception("user is not found");
    }
}

class UserNotExist extends Exception {
    UserNotExist() {
        throw new Exception("user is not existed");
    }
}
```