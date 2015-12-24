import {UserItem} from '../models/user';
import {Injectable} from 'angular2/core';
import { Http } from 'angular2/http';
import { Inject } from 'angular2/core'
import {Headers} from 'angular2/http';
let _users:UserItem[] = [];
@Injectable()
export class UserService {
    constructor(public http:Http) {
    }

    getUsers() {
        var headers = new Headers();
        headers.append('X-Parse-Application-Id', 'u73iu1oMIQCVb5pX3BuwfHeqQB31m3eRbWkEtOfO');
        headers.append('X-Parse-REST-API-Key', 'mAaTgxMkm8mw4K71WBa36zGpCUEfmiWlU565E7Xg');
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
        var headers = new Headers();
        headers.append('X-Parse-Application-Id', 'u73iu1oMIQCVb5pX3BuwfHeqQB31m3eRbWkEtOfO');
        headers.append('X-Parse-REST-API-Key', 'mAaTgxMkm8mw4K71WBa36zGpCUEfmiWlU565E7Xg');
        headers.append('Content-Type', 'application/json');
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
        var headers = new Headers();
        headers.append('X-Parse-Application-Id', 'u73iu1oMIQCVb5pX3BuwfHeqQB31m3eRbWkEtOfO');
        headers.append('X-Parse-REST-API-Key', 'mAaTgxMkm8mw4K71WBa36zGpCUEfmiWlU565E7Xg');
        return this.http.delete('https://api.parse.com/1/classes/Persons/' + item.id, {
            headers: headers
        });
    }
}
