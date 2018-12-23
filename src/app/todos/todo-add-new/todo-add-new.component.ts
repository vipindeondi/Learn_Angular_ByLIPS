import { Component, OnInit } from '@angular/core';
import {Itodos} from '../service/Itodos';
import {TodosService} from '../service/todos.service';

import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
  id: number = 0;
  constructor(private todoservice:TodosService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      this.id = + data.get('id');
      if (this.id > 0) {
        this.todoservice.getTODOSById(this.id).subscribe(
          (response) => {
            this.todos = response;
          })
      }
    });
  }

  addNewtodos(){
    this.todoservice.addNewtodos(this.todos).subscribe((data) => console.log(data));
    console.log(this.todos);
  
  }

}
