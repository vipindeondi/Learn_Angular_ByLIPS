import { Injectable } from '@angular/core';
import {HttpClient,HttpRequest} from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }

  getphotos(){
    let request = new HttpRequest('GET',
    'https://jsonplaceholder.typicode.com/photos',
    {reportProgress: true});
    return this.http.request(request);
  }
}
