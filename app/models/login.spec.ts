/**
 * Created by raj on 1/1/2016.
 */
import {LoginItem} from './login';
describe('Login', () => {
    it('has username given in the constructor', () => {
        let login = new LoginItem('testuser', 'testuser');
        expect(login.username).toEqual('testuser');
    });
    it('has password given in the constructor', () => {
        let login = new LoginItem('testuser', 'testuser');
        expect(login.password).toEqual('testuser');
    });
})