import { Injectable } from '@angular/core';
import { HttpHeaders, HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustominterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(req);

    // if(req.method==='GET') {
    //   console.log(req);
    //   let request =req.clone({headers: new HttpHeaders().set('apikey','dehgkghk')});
    //   console.log(request);
    //   return next.handle(request);
    // }
      if(req.url !=='/api/v1/user/login') {
       const header = new HttpHeaders().set('access-token',
       sessionStorage.getItem('userToken'));
       const request =req.clone({headers:header});
       return next.handle(request);
     }
     return next.handle(req);


    return next.handle(req);
  }
}
