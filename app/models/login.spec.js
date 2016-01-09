System.register(['./login'], function(exports_1) {
    var login_1;
    return {
        setters:[
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            describe('Login', function () {
                it('has username given in the constructor', function () {
                    var login = new login_1.LoginItem('testuser', 'testuser');
                    expect(login.username).toEqual('testuser');
                });
                it('has password given in the constructor', function () {
                    var login = new login_1.LoginItem('testuser', 'testuser');
                    expect(login.password).toEqual('testuser');
                });
            });
        }
    }
});
//# sourceMappingURL=login.spec.js.map