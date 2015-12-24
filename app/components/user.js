System.register(['angular2/core', 'angular2/router', "../services/userService", 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, userService_1, http_1;
    var User;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            User = (function () {
                function User(userService) {
                    this.userService = userService;
                    this.users = [];
                }
                User.prototype.ngOnInit = function () {
                    this.refreshUsers();
                };
                User.prototype.refreshUsers = function () {
                    var _this = this;
                    this.userService.getUsers().subscribe(function (res) { return _this.users = res; });
                };
                User.prototype.delete = function (user) {
                    var _this = this;
                    var result = this.userService.deleteUser(user);
                    result.subscribe(function () { return _this.refreshUsers(); });
                };
                User = __decorate([
                    core_1.Component({
                        selector: 'user',
                        templateUrl: './app/templates/user.html',
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [userService_1.UserService])
                ], User);
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map