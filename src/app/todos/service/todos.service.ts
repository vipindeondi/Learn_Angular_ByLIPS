import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Itodos} from './Itodos';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }
  getpost() {
    return this.http.get<Itodos[]>('https://jsonplaceholder.typicode.com/todos');

  }
  addNewtodos(todo: Itodos) {
    return this.http.post<Itodos>('https://jsonplaceholder.typicode.com/todos', todo);

  }
  getTODOSById(id: number) {
    return this.http.get<Itodos>('https://jsonplaceholder.typicode.com/todos/' + id);
  }
}
