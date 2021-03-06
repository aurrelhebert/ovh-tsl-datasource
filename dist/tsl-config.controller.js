System.register(["./datasource"], function (exports_1, context_1) {
    "use strict";
    var datasource_1, TslConfigCtrl;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (datasource_1_1) {
                datasource_1 = datasource_1_1;
            }
        ],
        execute: function () {
            TslConfigCtrl = /** @class */ (function () {
                function TslConfigCtrl(backendSrv, $routeParams) {
                    this.backendSrv = backendSrv;
                    this.$routeParams = $routeParams;
                    this.current = new datasource_1.default();
                    this.current.id = this.$routeParams.id;
                    if (this.current.id)
                        this._loadDatasourceConfig();
                    if (!this.current.jsonData.var) {
                        this.current.jsonData.var = {};
                    }
                }
                TslConfigCtrl.prototype._loadDatasourceConfig = function () {
                    var _this = this;
                    this.backendSrv.get('/api/datasources/' + this.current.id)
                        .then(function (ds) {
                        Object.assign(_this.current, ds);
                    });
                };
                TslConfigCtrl.prototype._addExtraVar = function () {
                    if (!this.current.jsonData.var) {
                        this.current.jsonData.var = {};
                    }
                    if (this.newExtraKey && this.newExtraVal) {
                        this.current.jsonData.var[this.newExtraKey] = this.newExtraVal;
                        this.newExtraKey = '';
                        this.newExtraVal = '';
                    }
                };
                TslConfigCtrl.prototype._delExtraVar = function (key) {
                    delete this.current.jsonData.var[key];
                };
                TslConfigCtrl.prototype._editKey = function (key) {
                    this.newExtraKey = key;
                    this.newExtraVal = this.current.jsonData.var[key];
                };
                TslConfigCtrl.templateUrl = 'template/config.html';
                return TslConfigCtrl;
            }());
            exports_1("default", TslConfigCtrl);
        }
    };
});
