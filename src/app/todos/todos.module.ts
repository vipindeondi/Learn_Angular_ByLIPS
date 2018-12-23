import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoAddNewComponent } from './todo-add-new/todo-add-new.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodosRoutingModule
  ],
  declarations: [
    TodosComponent,
    TodoAddNewComponent,
     
  ]
})
export class TodosModule { }
