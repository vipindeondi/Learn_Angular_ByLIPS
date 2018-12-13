import { Component, OnInit } from '@angular/core';
import{TodosService} from './service/todos.service';
import{Itodos} from './service/Itodos';
import { from } from 'rxjs';
import { PostsService } from '../posts/service/posts.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Itodos[];

  constructor(private todosservice:TodosService) { }

  ngOnInit() {
    this.todosservice.getpost().subscribe((data)=>this.todos=data,
    (err)=>console.log('err'));
 
  }

}
