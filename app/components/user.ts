/**
 * Created by raj on 12/21/2015.
 */
import {Component} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {UserItem} from '../models/user';
import {UserService} from "../services/userService";
import {HTTP_PROVIDERS, Http} from 'angular2/http';


@Component({
    selector: 'user',
    templateUrl: './app/templates/user.html',
    providers: [HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})

export class User {
    public users:UserItem[] =[];
    constructor(private userService:UserService) {
    }

    ngOnInit(){
      this.refreshUsers();
    }

    refreshUsers(){
        this.userService.getUsers().subscribe(res => this.users = res);
    }

    delete(user){
       var result  =  this.userService.deleteUser(user);
       result.subscribe(()=>this.refreshUsers());
    }
}
