import { Injectable } from '@angular/core';
import {User} from './user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedin = false;
  isAdmin =false;
  
  constructor() { }

  login(user:User){
    if(user.password==='test'&& user.username ==='test'){
      this.isLoggedin=true;
    }
    if(user.password==='Admin'&& user.username ==='Admin'){
      this.isLoggedin=true;
      this.isAdmin=true;
    }
    return this.isLoggedin;
  }

}
