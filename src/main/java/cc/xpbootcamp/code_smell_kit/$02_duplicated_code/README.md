## 重复的代码
举例一

里面几行的代码几乎一样，除了名称。

```js
CustomerCreator.prototype.getValues = function () {

    var customer = {};
    customer.name = $.trim(this.view.find("[sid=name]").val());
    customer.contact = $.trim(this.view.find("[sid=contact]").val());
    customer.phone = $.trim(this.view.find("[sid=phone]").val());
    customer.email = $.trim(this.view.find("[sid=email]").val());

    return customer;
};
```
