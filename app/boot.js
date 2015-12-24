System.register(['angular2/platform/browser', './components/app', 'angular2/router', './services/userService', 'angular2/http'], function(exports_1) {
    var browser_1, app_1, router_1, userService_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (userService_1_1) {
                userService_1 = userService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, userService_1.UserService]);
        }
    }
});
//# sourceMappingURL=boot.js.map