import {Component} from 'angular2/core';
import {LoginItem} from '../models/login';
import {NgForm}    from 'angular2/common';
import {Router} from 'angular2/router';
@Component({
    selector: 'login',
    templateUrl: './app/templates/login.html'
})

export class Login {
    constructor(private _router:Router) {

    }

    model = new LoginItem('', '');

    onSubmit() {
        if (this.model.username == 'testuser' && this.model.password == 'testuser') {
            this._router.navigate(['User']);
        }
    }
}
