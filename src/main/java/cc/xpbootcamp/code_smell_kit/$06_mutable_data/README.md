# mutable_data

Example

```java
import java.util.ArrayList;
import java.util.Map;

class Storage {
    private Map<Student, List<Object>> borrowedObj;

    public void addBook(Student student, Book book) {
        List<Object> objects = borrowedObj.get(student);
        if (null == objects) {
            objects = new ArrayList<>();
        }
        objects.add(book);
        borrowedObj.put(student, objects);    
    } 
    
    public void addSport(Student student, Sport sport) {
            List<Object> objects = borrowedObj.get(student);
            if (null == objects) {
                objects = new ArrayList<>();
            }
            objects.add(sport);
            borrowedObj.put(student, objects);    
        } 
}
```