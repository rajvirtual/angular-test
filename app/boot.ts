import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './components/app'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {UserService} from './services/userService'
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS,UserService]);