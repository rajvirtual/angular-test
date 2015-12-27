System.register(['../models/user', 'angular2/core', 'angular2/http', '../constants/constants'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var user_1, core_1, http_1, http_2, constants;
    var _users, headers, UserService;
    return {
        setters:[
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (constants_1) {
                constants = constants_1;
            }],
        execute: function() {
            _users = [];
            headers = new http_2.Headers();
            UserService = (function () {
                function UserService(http) {
                    this.http = http;
                    headers.append('X-Parse-Application-Id', constants.AppId);
                    headers.append('X-Parse-REST-API-Key', constants.AppKey);
                }
                UserService.prototype.getUsers = function () {
                    return this.http.get('https://api.parse.com/1/classes/Persons', {
                        headers: headers
                    }).map(function (response) {
                        return response.json();
                    })
                        .map(function (users) {
                        var result = [];
                        if (users && users.results) {
                            users.results.forEach(function (user) {
                                result.push(new user_1.UserItem(user.objectId, user.FullName, user.Email, user.Address, user.Age));
                            });
                        }
                        _users = _users.concat(result);
                        return result;
                    });
                };
                UserService.prototype.addUser = function (item) {
                    var userData = {
                        "FullName": item.fullname,
                        "Email": item.email,
                        "Age": item.age,
                        "Address": item.address
                    };
                    var data = JSON.stringify(userData);
                    if (!item.id) {
                        return this.http.post('https://api.parse.com/1/classes/Persons', data, {
                            headers: headers
                        });
                    }
                    return this.http.put('https://api.parse.com/1/classes/Persons/' + item.id, data, {
                        headers: headers
                    });
                };
                UserService.prototype.getUser = function (id) {
                    return _users.find(function (p) { return p.id == id; });
                };
                UserService.prototype.deleteUser = function (item) {
                    return this.http.delete('https://api.parse.com/1/classes/Persons/' + item.id, {
                        headers: headers
                    });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=userService.js.map