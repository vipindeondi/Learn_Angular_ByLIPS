import { Injectable } from '@angular/core';
import { Resolve, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';

import { LoginService } from 'src/app/logincomponent/service/login.service';
import { Iposts } from '../Iposts';
import { PostsService } from '../posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostAddGuard implements CanActivateChild, Resolve<Iposts[]> {

  constructor(private loginservice: LoginService,
    private postsService: PostsService) {    //inject the login service which can be access permission for add post edit option.

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<Iposts[]> | Promise<Iposts[]> | Iposts[] {
    return this.postsService.getPosts();

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.loginservice.isAdmin; //only Admin can Access for edit option on Add post.

  }

}
