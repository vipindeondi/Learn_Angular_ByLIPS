import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { PostsComponent } from './posts/posts.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { TodosComponent } from './todos/todos.component';
import { from } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { PhotosComponent } from './photos/photos.component';
import { AuthGuard } from './Guards/auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  // { path: 'home', component: EmployeeComponent },
  {
    path: 'login', component: LogincomponentComponent,
    data: {
      title: 'PLEASE LOG-IN HERE.'
    }
  },
  { path: 'register', component: RegistrationComponent },

  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]}, //Add this for update profile.

  { path: '', redirectTo: 'login', pathMatch: 'full' }, // set By Default page with the help of redirectTo

  { path: 'posts', loadChildren: './posts/posts.module#PostsModule' }, // use this loadchilren for lazyloading and load in reqired by user demand.

  {
    path: 'department', component: DepartmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'photos', component: PhotosComponent,
    data: {
      title: 'Photos List',
      count: 10
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'product', component: ProductComponent, canActivate:[AuthGuard]
  },
  {
    path: 'product/:id', component : ProductDetailsComponent
  },
  {
    path: 'booksDetails', component: BookComponentComponent,
    canActivate: [AuthGuard]
  },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
  //  { path: 'todos', component: TodosComponent },
  { path: 'todos', loadChildren: './todos/todos.module#TodosModule' }, // loadChilren it is using using for Lazy Loading.
  { path: '**', component: NotfoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
