import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { PostsComponent } from './posts/posts.component';
import { ProductComponent } from './product/product.component';
import { TodosComponent } from './todos/todos.component';
import { from } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { PhotosComponent } from './photos/photos.component';
import{AuthGuard}from './Guards/auth.guard';

const routes: Routes = [
  // { path: 'home', component: EmployeeComponent },
  {
    path: 'login', component: LogincomponentComponent,
    data: {
      title: 'PLEASE LOG-IN HERE.'
    }
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //set By Default page with the help of redirectTo
  {path:'posts', loadChildren:"./posts/posts.module#PostsModule"}, //use this loadchilren for lazyloading and dosn't want to use it.
  
  { path: 'department', component: DepartmentComponent,
  canActivate:[AuthGuard] },
  {
    path: 'photos', component: PhotosComponent,
    data: {
      title: 'Photos List',
      count: 10
    },
    canActivate:[AuthGuard]
  },
  { path: 'booksDetails', component: BookComponentComponent,
  canActivate:[AuthGuard] },
  { path: 'product', component: ProductComponent,canActivate:[AuthGuard] },
  //  { path: 'todos', component: TodosComponent },
   {path:'todos',loadChildren:"./todos/todos.module#TodosModule"},
  { path: '**', component: NotfoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
