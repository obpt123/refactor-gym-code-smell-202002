/**************************
 *
 * 定义CategoryItem组件
 *
 **************************/
var AccountItem = function (vehicle) {

    this.data = vehicle;

    this.codeCell = null;
    this.numberCell = null;
    this.companyNameCell = null;
    this.groupNameCell = null;
    this.routerSNCell = null;

    this.view = null;

    this.init();
};

AccountItem.extends(BaseItem);
AccountItem.prototype.init = function () {

    this.template = $("#item_templete tbody").html();
    this.view = $(this.template);
    this.view.bind('click', this, this.onClick);


    this.nameCell = this.view.find("[sid=name]");
    this.emailCell = this.view.find("[sid=email]");
    this.rolesCell = this.view.find("[sid=roles]");
    this.createTimeCell = this.view.find("[sid=createTime]");

    this.nameCell.text(this.data.name);
    this.emailCell.text(this.data.email);
    this.createTimeCell.text(this.data.createTime);

    for ( var i in this.data.roles)
        this.rolesCell.append('<span class="category">'+this.data.roles[i].name +'</span>');

    if (!this.data.email)
        this.emailCell.append('<span class="di vacantField"></span>');
    if(this.data.roleNames=='')
        this.rolesCell.append('<span class="di vacantField"></span>');

    this.actionsMenu = new ActionsMenu(this.view.find("[sid=menu]"), this, this.onActionsMenuClick);

};


AccountItem.prototype.onActionsMenuClick = function (idx) {

    var self = this;
    if (idx == 1) {
        new AccountEditor(this.data.id, this.data);
    } else if (idx == 2) { // delete

        Alert.deleteBox("Warning", "Are you sure to delete this account?", function () {

            AccountDataHandler.delete(self.data.id, self, self.unbindCallback);
        }, null, "Yes, delete");

    }
};

AccountItem.prototype.unbindCallback = function (result) {

    refreshDataTable();
};

var CustomerItem = function (data, listener, listenerFun) {

    this.view = $("<li></li>");
    this.view.html(data.name);
    this.name = data.name;
    this.id = data.id;
    this.lisetener = listener;
    this.listenerFun = listenerFun;
    this.view.bind('click', $.proxy(this.onViewClick, this));
};

CustomerItem.prototype.onViewClick = function () {

    this.listenerFun.call(this.lisetener, this.id, this);
    this.view.addClass("on");
};

CustomerItem.prototype.clearClick = function () {
    this.view.removeClass("on");
};

var accountDelegate = function () {

};

accountDelegate.doSearch = function (params) {

    AccountDataHandler.listWithListener(1, Constants.pageSize, params, onGetAccountList, customerId);
};

accountDelegate.switchPage = function (page, to, params) {

    accountDataTable.inActivateSearchBar();
    AccountDataHandler.listWithListener(page, to, params, onGetAccountList, customerId);
};

/**
 * 刷新 dataPanel 数据
 */
function refreshDataTable() {

    accountDataTable.removeAllItem();
    accountDataTable.doSearchByUrl();
};

function onGetAccountList(datas, currentPage, total, pageSize) {

    accountDataTable.removeAllItem();

    $.each(datas, function (i, data) {

        accountDataTable.addItem(new AccountItem(data));
    });

    accountDataTable.setPageNav(pageSize, total, currentPage);
    accountDataTable.activateSearchBar();
}

function onGetCustomers(datas) {

    customerContext.initDate(datas);

}

var CustomerContext = function (view) {

    this.view = view;
    this.customers = this.view.find("[sid=customerList]");
    this.customerItems = [];
    this.datas = null;
};

CustomerContext.prototype.initDate = function (datas) {

    this.datas = datas;
    this.drewItem(datas);
    this.initSearchBar();
};

CustomerContext.prototype.drewItem = function (datas) {

    this.customers.empty();
    this.customerItems = [];
    var self = this;
    $.each(datas, function (i, data) {

        var customerItem = new CustomerItem(data, self, self.onCustomerClick);
        self.customers.append(customerItem.view);
        self.customerItems.push(customerItem);
    });
    if (this.customerItems.length > 0)
        this.customerItems[0].view.trigger("click");

    this.customers.parent().removeClass("sub-loading");
};

CustomerContext.prototype.onCustomerClick = function (id, item) {

    $.each(this.customerItems, function (i, item) {

        item.clearClick();
    });

    customerId = id;
    customerName = item.name;
    accountDataTable.doSearchByUrl();
};

CustomerContext.prototype.initSearchBar = function () {

    this.searchBar = $('#customer_search_bar');
    this.searchBar.bind("keyup", this, this.onSearch);
};

/**
 * 页面内查询
 * @param condition
 */
CustomerContext.prototype.onSearch = function (event) {

    var self = event.data;
    var condition = $(event.target).val();

    var customerListData = SearchInPage.filter(self.datas, ["name"], condition);
    self.drewItem(customerListData);
};
function onCreateBtnClick() {

    new AccountCreator();
}


var customerId = 0;
var customerName = '';
var accountDataTable = null;
var tabs = null;
var customerContext = null;
var AccountInit = function () {
    this.init();
};

AccountInit.extends(BaseInit);

AccountInit.prototype.pageInit = function () {


    accountDataTable = new DataTable($("#data_table"),["code","number","owner","sn","createTime"]);

    //初始化搜索框
    var searchDatas = {};
    searchDatas.keys = ["name", "email"];
    searchDatas.titles = ["Name", "Email"];

    accountDataTable.setSearchBar(searchDatas);
    accountDataTable.setDelegate(accountDelegate);
    customerContext = new CustomerContext($("#customer_context"));
    AccountDataHandler.listCustomers(onGetCustomers);
    $("#create_btn").bind("click", onCreateBtnClick);

};

$(document).ready(function () {

    new AccountInit();
});