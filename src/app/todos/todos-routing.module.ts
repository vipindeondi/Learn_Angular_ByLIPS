import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAddNewComponent } from './todo-add-new/todo-add-new.component';
import { TodosComponent } from './todos.component';
import{AuthGuard} from '../Guards/auth.guard';

const routes: Routes = [
  { path: '', component: TodosComponent,
  // { path: 'todos', component: TodosComponent,
  canActivate:[AuthGuard] },
  // { path: './posts:id', component: TodoAddNewComponent },
  { path: ':id', component: TodoAddNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
