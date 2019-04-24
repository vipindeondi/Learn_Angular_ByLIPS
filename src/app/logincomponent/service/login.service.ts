import { Injectable , Inject } from '@angular/core';
import {User} from './user';
import {HttpClient}from '@angular/common/http';
import {APP_CONFIG,IAppConfig }from '../../custom';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedin = false;
  isAdmin = false;
  currentuser = '';

  constructor( private http:HttpClient,
    @Inject(APP_CONFIG)private appConfig:IAppConfig) {
      console.log(this.appConfig);
     }

login(user:User){

//  return this.http.post('/api/v1/user/login', user);
 return this.http.post(this.appConfig.apiEndPoint + '/api/v1/user/login', user);
}


  // login(user: User) {
  //   if (user.password === 'test' && user.username === 'test') {
  //     this.isLoggedin = true;
  //   }
  //   if (user.password === 'Admin' && user.username === 'Admin') {
  //     this.isLoggedin = true;
  //     this.isAdmin = true;
  //   }
  //   this.currentuser = user.username;
  //   return this.isLoggedin;
  // }

}
