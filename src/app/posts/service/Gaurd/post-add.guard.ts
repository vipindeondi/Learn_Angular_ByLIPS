import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from 'src/app/logincomponent/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class PostAddGuard implements CanActivateChild {
  constructor(private loginservice: LoginService) {    //inject the login service which can be access permission for add post edit option.

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.loginservice.isAdmin; //only Admin can Access for edit option on Add post.
     
  }

}
