/**************************
 *
 * 定义CompanyEditer组件
 *
 **************************/

$(function () {

    $.get("/view/customer/customer-edit.html", function (data) {

        CustomerEditor.template = data;
    });
});

var CustomerEditor = function (companyId, data) {

    this.view = null;
    this.id = companyId;
    this.inputValidateArr = null;

    this.data = data;
    this.view = $("#edit_window");
    this.view.empty().append(CustomerEditor.template);
    this.view.removeClass("dn");


    this.contentView = this.view.find("[sid=content]");
    this.contentView.addClass("popover-loading");
    this.DataHandlerFun=CustomerDataHandler.update;
    CustomerDataHandler.get(this.id, this, this.onGetCompany);


    this.init();
};

CustomerEditor.extends(BaseMaintainer);

CustomerEditor.template = null;

CustomerEditor.prototype.onGetCompany = function (data) {

    this.view.find("[sid=name]").val(data.name);
    this.view.find("[sid=contact]").val(data.contact);
    this.view.find("[sid=phone]").val(data.phone);
    this.view.find("[sid=email]").val(data.email);

    this.contentView.removeClass("popover-loading");
};

CustomerEditor.prototype.getValues = function () {

    var company = {};
    company.id = this.id;
    company.name = $.trim(this.view.find("[sid=name]").val());
    company.contact = $.trim(this.view.find("[sid=contact]").val());
    company.phone = $.trim(this.view.find("[sid=phone]").val());
    company.email = $.trim(this.view.find("[sid=email]").val());

    return company;
};

CustomerEditor.prototype.onSubmitClick = function (event) {

    var self = event.data;

    var flag = true;

    $.each(self.inputValidateArr, function (i, e) {

        flag = e.validate() && flag;

        if (!flag)
            return false;
    });

    if (!flag)
        return;

    self.view.find("[sid=submitBtn]").addClass("save-loading").text("Saving").unbind("click");
    CustomerDataHandler.update(self.getValues(), self, self.submitCallBack);
};