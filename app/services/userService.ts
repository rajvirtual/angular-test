import {UserItem} from '../models/user';
import {Injectable} from 'angular2/core';
import { Http } from 'angular2/http';
import { Inject } from 'angular2/core'
import {Headers} from 'angular2/http';
import * as constants from '../constants/constants';
let _users:UserItem[] = [];

let headers:Headers = new Headers();

@Injectable()
export class UserService {
    constructor(public http:Http) {
        headers.append('X-Parse-Application-Id', constants.AppId);
        headers.append('X-Parse-REST-API-Key', constants.AppKey);
    }

    getUsers() {
        return this.http.get('https://api.parse.com/1/classes/Persons', {
            headers: headers
        }).map((response:any)=> {
                return response.json();
            })
            .map((users:any) => {
                let result:UserItem[] = [];
                if (users && users.results) {
                    users.results.forEach((user)=> {
                        result.push(new UserItem(user.objectId, user.FullName,
                            user.Email, user.Address, user.Age));
                    });
                }
                _users = _users.concat(result);
                return result;
            });
    }

    addUser(item) {
        let userData = {
            "FullName": item.fullname,
            "Email": item.email,
            "Age": item.age,
            "Address": item.address
        }
        let data = JSON.stringify(userData);
        if (!item.id) {
            return this.http.post('https://api.parse.com/1/classes/Persons', data, {
                headers: headers
            });
        }
        return this.http.put('https://api.parse.com/1/classes/Persons/' + item.id, data, {
            headers: headers
        });
    }

    getUser(id) {
        return _users.find(p=>p.id == id);
    }

    deleteUser(item) {
        return this.http.delete('https://api.parse.com/1/classes/Persons/' + item.id, {
            headers: headers
        });
    }
}
