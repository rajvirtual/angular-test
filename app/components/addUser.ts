/**
 * Created by raj on 12/21/2015.
 */
import {Component} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES,RouteParams} from 'angular2/router';
import {UserItem} from '../models/user';
import {UserService} from "../services/userService";

@Component({
    selector: 'add-user',
    templateUrl: './app/templates/adduser.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AddUser {
    public user:UserItem = new UserItem(null, null, null, null);

    constructor(private routeParams:RouteParams, private userService:UserService,
                private router:Router) {
    }
    ngOnInit() {
        var id = this.routeParams.get('id');
        if (id != null) {
            this.user = this.userService.getUser(id);
        }
    }
    onSubmit() {
        var result = this.userService.addUser(this.user);
        result.subscribe(() => {
            this.userService.getUsers();
            this.router.navigate(['User']);
        });
    }
}
