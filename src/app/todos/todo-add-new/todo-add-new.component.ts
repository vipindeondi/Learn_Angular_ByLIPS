import { Component, OnInit } from '@angular/core';
import {Itodos} from '../service/Itodos';
import {TodosService} from '../service/todos.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-todo-add-new',
  templateUrl: './todo-add-new.component.html',
  styleUrls: ['./todo-add-new.component.css']
})
export class TodoAddNewComponent implements OnInit {

  todos:Itodos={
    completed: '',
    id: 0,
    title: '',
    userId: 0
  };

  constructor(private todoservice:TodosService) { }

  ngOnInit() {
  }

  addNewtodos(){
    this.todoservice.addNewtodos(this.todos).subscribe((data) => console.log(data));
    console.log(this.todos);
  
  }

}
