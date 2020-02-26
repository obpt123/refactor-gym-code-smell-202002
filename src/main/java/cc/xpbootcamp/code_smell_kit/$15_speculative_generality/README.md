## 夸夸其谈通用性

举例1:

下面的`ILegacyXXXProvider`,`IServiceXXXProvider` 里面是空内容，实际上不是必须的，有点过度设计

```csharp
public interface IXXXProvider {
    Task<Outcome> Assert(Action action);
    Task<Dictionary<Action, Outcome>> Query(XXXNamespace xxxNamespace);
}
```
```csharp
public interface ILegacyXXXProvider : IXXXProvider {

}
```
```csharp
public interface IServiceXXXProvider : IXXXProvider {
    
}
```