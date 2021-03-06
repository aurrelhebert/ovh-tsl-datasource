System.register([], function (exports_1, context_1) {
    "use strict";
    var TslDatasource;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            TslDatasource = /** @class */ (function () {
                function TslDatasource() {
                    this.basicAuth = false;
                    this.withCredentials = false;
                    this.id = null;
                    this.orgId = null;
                    this.isDefault = false;
                    this.name = '';
                    this.type = 'grafana-tsl-datasource';
                    this.access = 'direct';
                    this.user = '';
                    this.password = '';
                    this.url = '';
                    this.typeLogoUrl = '';
                    //basicAuth = true
                    //basicAuthUser = ''
                    //basicAuthPassword = ''
                    this.database = '';
                    this.jsonData = { var: {}, useBackend: false };
                    this.secureJsonFields = {};
                }
                return TslDatasource;
            }());
            exports_1("default", TslDatasource);
        }
    };
});
