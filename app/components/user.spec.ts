/**
 * Created by raj on 1/1/2016.
 */
import 'rxjs/add/operator/map';
import {
    iit,
    it,
    inject,
    injectAsync,
    beforeEachProviders,
    TestComponentBuilder,
    fakeAsync,
    tick
} from 'angular2/testing';


import { provide ,Injector ,bind} from 'angular2/core';
import {User} from '../components/user';
import {UserItem} from '../models/user';
import {UserService} from "../services/userService";
import {Observable} from "rxjs/Rx";
import {HTTP_PROVIDERS,BaseRequestOptions, Response, ResponseOptions ,ConnectionBackend } from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {Component, View} from 'angular2/core';
import { Http } from 'angular2/http';
import {NgFor , CORE_DIRECTIVES} from 'angular2/common';

let _users:UserItem[] = [new UserItem('1', 'Test1', 'test', 'test', 20),
    new UserItem('2', 'Test1', 'test', 'test', 30)];

class MockUserService extends UserService {
    getUsers() {
        return Observable.from(_users);
    }
}

describe('user component', () => {
    var injector = Injector.resolveAndCreate([
        BaseRequestOptions,
        MockBackend,
        provide(Http, {
            useFactory: function (backend, defaultOptions) {
                return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
        })
    ]);

    var http = injector.get(Http);

    beforeEachProviders(() => [provide(UserService, {useClass: MockUserService}), provide(Http, {useValue: http}),ROUTER_DIRECTIVES]);

    it('should make Service call getUsers', injectAsync([TestComponentBuilder,UserService, Http], (tcb,service, http) => {
        var spy = spyOn(service,'getUsers').and.returnValue(Observable.from(_users));
        return tcb.overrideTemplate(User,'<h1>Fake</h1>')
               .createAsync(User).then((fixture) => {
           var userInstance = fixture.componentInstance;
           userInstance.ngOnInit();
            expect(spy).toHaveBeenCalled();
        }, function (err) {
            console.log(err);
        });
    }));
});

@Component({
    selector: 'test-cmp'
})
@View({directives: [User]})
class TestComponent {
}