System.register([], function(exports_1) {
    var UserItem;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by raj on 12/20/2015.
             */
            UserItem = (function () {
                function UserItem(id, fullname, email, address, age) {
                    this.id = id;
                    this.fullname = fullname;
                    this.email = email;
                    this.address = address;
                    this.age = age;
                }
                return UserItem;
            })();
            exports_1("UserItem", UserItem);
        }
    }
});
//# sourceMappingURL=user.js.map