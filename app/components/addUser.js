System.register(['angular2/core', 'angular2/router', '../models/user', "../services/userService"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_1, userService_1;
    var AddUser;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (userService_1_1) {
                userService_1 = userService_1_1;
            }],
        execute: function() {
            AddUser = (function () {
                function AddUser(routeParams, userService, router) {
                    this.routeParams = routeParams;
                    this.userService = userService;
                    this.router = router;
                    this.user = new user_1.UserItem(null, null, null, null);
                }
                AddUser.prototype.ngOnInit = function () {
                    var id = this.routeParams.get('id');
                    if (id != null) {
                        this.user = this.userService.getUser(id);
                    }
                };
                AddUser.prototype.onSubmit = function () {
                    var _this = this;
                    var result = this.userService.addUser(this.user);
                    result.subscribe(function () {
                        _this.userService.getUsers();
                        _this.router.navigate(['User']);
                    });
                };
                AddUser = __decorate([
                    core_1.Component({
                        selector: 'add-user',
                        templateUrl: './app/templates/adduser.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, userService_1.UserService, router_1.Router])
                ], AddUser);
                return AddUser;
            })();
            exports_1("AddUser", AddUser);
        }
    }
});
//# sourceMappingURL=addUser.js.map