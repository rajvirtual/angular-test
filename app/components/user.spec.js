System.register(['rxjs/add/operator/map', 'angular2/testing', 'angular2/core', '../components/user', '../models/user', "../services/userService", "rxjs/Rx", 'angular2/http', 'angular2/http/testing', 'angular2/router'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var testing_1, core_1, user_1, user_2, userService_1, Rx_1, http_1, testing_2, router_1, core_2, http_2;
    var _users, MockUserService, TestComponent;
    return {
        setters:[
            function (_1) {},
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (user_2_1) {
                user_2 = user_2_1;
            },
            function (userService_1_1) {
                userService_1 = userService_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            _users = [new user_2.UserItem('1', 'Test1', 'test', 'test', 20),
                new user_2.UserItem('2', 'Test1', 'test', 'test', 30)];
            MockUserService = (function (_super) {
                __extends(MockUserService, _super);
                function MockUserService() {
                    _super.apply(this, arguments);
                }
                MockUserService.prototype.getUsers = function () {
                    return Rx_1.Observable.from(_users);
                };
                return MockUserService;
            })(userService_1.UserService);
            describe('user component', function () {
                var injector = core_1.Injector.resolveAndCreate([
                    http_1.BaseRequestOptions,
                    testing_2.MockBackend,
                    core_1.provide(http_2.Http, {
                        useFactory: function (backend, defaultOptions) {
                            return new http_2.Http(backend, defaultOptions);
                        },
                        deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                    })
                ]);
                var http = injector.get(http_2.Http);
                testing_1.beforeEachProviders(function () { return [core_1.provide(userService_1.UserService, { useClass: MockUserService }), core_1.provide(http_2.Http, { useValue: http }), router_1.ROUTER_DIRECTIVES]; });
                testing_1.it('should make Service call getUsers', testing_1.injectAsync([testing_1.TestComponentBuilder, userService_1.UserService, http_2.Http], function (tcb, service, http) {
                    var spy = spyOn(service, 'getUsers').and.returnValue(Rx_1.Observable.from(_users));
                    return tcb.overrideTemplate(user_1.User, '<h1>Fake</h1>')
                        .createAsync(user_1.User).then(function (fixture) {
                        var userInstance = fixture.componentInstance;
                        userInstance.ngOnInit();
                        expect(spy).toHaveBeenCalled();
                    }, function (err) {
                        console.log(err);
                    });
                }));
            });
            TestComponent = (function () {
                function TestComponent() {
                }
                TestComponent = __decorate([
                    core_2.Component({
                        selector: 'test-cmp'
                    }),
                    core_2.View({ directives: [user_1.User] }), 
                    __metadata('design:paramtypes', [])
                ], TestComponent);
                return TestComponent;
            })();
        }
    }
});
//# sourceMappingURL=user.spec.js.map