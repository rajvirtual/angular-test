import {Component} from 'angular2/core';
import {Login} from './login';
import {User} from './user';
import {AddUser} from './addUser';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    templateUrl: './app/templates/app.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'Login', component: Login},
    {path: '/users', name: 'User', component: User},
    {path: '/adduser/:id', name: 'AddUser', component: AddUser},
])

export class AppComponent {
}
