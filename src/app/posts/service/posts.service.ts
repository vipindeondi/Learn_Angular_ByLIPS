import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Iposts } from './Iposts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  //  It's a method for diplaying all records in table  by get( REST_method) method or FUNCTION it's a REST API.

  getPosts() {
  //   return this.http.get<Iposts[]>('https://jsonplaceholder.typicode.com/posts',
  //   {headers:new HttpHeaders().set('apiKey','zqiihihkhhdh')}); //It's using for Get Method all Data Displaing.HttpHeaders use for the set Apikey.
  return this.http.get<Iposts[]>('https://jsonplaceholder.typicode.com/posts');
}

// addpost method is use for add value in form by POST(REST_method) method.==>>INSERT(IN REST-->>POST)
  addPost(post: Iposts) {
    // return this.http.post<Iposts>('https://jsonplaceholder.typicode.com/posts', post,
    // {headers:new HttpHeaders().set('apikey','vipin')});

    return this.http.post<Iposts>('https://jsonplaceholder.typicode.com/posts',post);
  }

  //this getpostbyid method is use for data ransfer from one page to another page. get(REST_mehod-->>GET)
  getPosById(id:number){
    return this.http.get<Iposts>('https://jsonplaceholder.typicode.com/posts/' +id);

  }

  //this updaepostbyid method using for update the data by PUT(REST_method)==>> UPDATE(IN REST-->>PUT)
  updatePostById(post:Iposts){
    return this.http.put<Iposts>('https://jsonplaceholder.typicode.com/posts/' +post.id,post);

  }

}
