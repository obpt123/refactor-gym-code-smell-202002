# 冗赘的元素

举例1:

```csharp UserId
public class UserId : IEquatable<UserId>
{
    public Guid Id { get; }

    public UserId(Guid id)
    {
        Id = id;
    }

    public bool Equals(UserId other) {
        if (ReferenceEquals(null, other)) {
            return false;
        }
        if(ReferenceEquals(null, other)) {
            return true;
        }
        return Id.Equals(other.Id);
    }
}
```

举例2:

```csharp TenantId
public class TenantId : IEquatable<TenantId>
{
    public Guid Id { get; }

    public TenantId(Guid id)
    {
        Id = id;
    }

    public bool Equals(TenantId other) {
        if (ReferenceEquals(null, other)) {
            return false;
        }
        if(ReferenceEquals(null, other)) {
            return true;
        }
        return Id.Equals(other.Id);
    }
}
```