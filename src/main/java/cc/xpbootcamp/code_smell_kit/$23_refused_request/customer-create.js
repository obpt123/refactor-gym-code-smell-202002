/**************************
 *
 * 定义CompanyCreater组件
 *
 **************************/

$(function () {

    /* 加载需要的页面 */
    $.get("/view/customer/customer-create.html", function (data) {

        //赋值给CompanyCreater的模板
        CustomerCreator.template = data;
    });
});

/**
 * 定义创建公司的业务类
 * @constructor
 */
var CustomerCreator = function () {

    this.view = $("#create_window");
    this.view.empty().append(CustomerCreator.template);
    this.typeSelect = null;

    this.DataHandlerFun = CustomerDataHandler.create;

    this.init();
};

CustomerCreator.extends(BaseMaintainer);
// CustomerCreator.prototype = new BaseMaintainer();
// CustomerCreator.prototype.constructor = CustomerCreator;
//视图的容器
CustomerCreator.template = null;



/**
 * 得到视图所有数据
 * @returns {{}} 公司对象
 */
CustomerCreator.prototype.getValues = function () {

    var customer = {};
    customer.name = $.trim(this.view.find("[sid=name]").val());
    customer.contact = $.trim(this.view.find("[sid=contact]").val());
    customer.phone = $.trim(this.view.find("[sid=phone]").val());
    customer.email = $.trim(this.view.find("[sid=email]").val());

    return customer;
};