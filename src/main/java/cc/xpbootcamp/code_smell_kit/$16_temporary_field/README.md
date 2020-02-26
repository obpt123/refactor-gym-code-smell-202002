# temporary field

Example

```java
import lombok.Getter;
import java.util.List;import java.util.stream.Collectors;

@Getter
class Library {
    private List<Book> books;
    private List<Book> borrowedBooks;
    
    public addBook(Book book){
        this.books.add(book);
        this.borrowedBooks = books.stream().filter(book -> book.isBorrowed()).collect(Collectors.toList());
    }
}
```