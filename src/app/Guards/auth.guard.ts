import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';

import{Router,Route,UrlSegment} from '@angular/router';
import{CanActivate,CanLoad,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

import{LoginService}from '../logincomponent/service/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanLoad {
  
  constructor(private loginservice:LoginService,
    private router:Router){

  }

  validateUser(){
    if(this.loginservice.isLoggedin){
      return true;
    } else{
      this.router.navigate(['/login']);
      return false;
    }
  
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.validateUser();
  }
  
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean{
    return this.validateUser();
  }
}
 