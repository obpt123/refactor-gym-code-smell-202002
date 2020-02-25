var BaseMaintainer = function () {

    this.view = null;
    this.inputValidateArr = null;
    this.DataHandlerFun = null;
    this.dataView = null;
    this.data = null;
    this.listener = null;
    this.listenerFun = null;
    this.id = 0;
};

BaseMaintainer.prototype.init = function () {

    this.view.find("[sid=closeBtn]").bind("click", this, this.onCloseClick);
    this.view.find("[sid=cancelBtn]").bind("click", this, this.onCloseClick);
    this.view.find("[sid=submitBtn]").bind("click", this, this.onSubmitClick);

    this.view.removeClass("dn");
};

BaseMaintainer.prototype.onCloseClick = function (event) {

    var self = event.data;
    self.view.addClass("dn");
};

BaseMaintainer.prototype.getValues = function () {

};

BaseMaintainer.prototype.onSubmitClick = function (event) {

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
    self.DataHandlerFun(self.getValues(), self, self.submitCallBack);
};

BaseMaintainer.prototype.submitCallBack = function (flag, tag) {

    if (flag) {
        this.view.addClass("dn");

        Information.success();
        if(this.data && this.dataView){

            DataBinder.bind(this.dataView, this.data);
        }else {

            refreshDataTable();
        }

        if(this.listener && this.listenerFun){

            this.listenerFun.call(this.listener,this.data,this.dataView);
        }

        if (tabs) {

            if (tag) {

                tabs.show(tag);
                tabs.resize(2);
            }
            if (this.id > 0) {

                tabs.init(this.id);
                tabs.resize(2);
            }
        }
    } else {
        Information.failed();
        this.view.find("[sid=submitBtn]").removeClass("save-loading").text("Save").bind("click", this, this.onSubmitClick);
    }
};