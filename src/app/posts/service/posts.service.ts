import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Iposts } from './Iposts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  //  It's a method for diplaying all records in table  by get() method or FUNCTION it's a REST API.

  getPosts() {
  //   return this.http.get<Iposts[]>('https://jsonplaceholder.typicode.com/posts',
  //   {headers:new HttpHeaders().set('apiKey','zqiihihkhhdh')}); //It's using for Get Method all Data Displaing.HttpHeaders use for the set Apikey.
  return this.http.get<Iposts[]>('https://jsonplaceholder.typicode.com/posts');
}

  addPost(post: Iposts) {
    // return this.http.post<Iposts>('https://jsonplaceholder.typicode.com/posts', post,
    // {headers:new HttpHeaders().set('aptkey','vipin')});

    return this.http.post<Iposts>('https://jsonplaceholder.typicode.com/posts',post);
  }
}
