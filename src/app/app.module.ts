import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';// add for httpclient for rest api..
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { BooklistComponentComponent } from './book-component/booklist-component/booklist-component.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ContainerComponent } from './container/container.component';
import { ProductService } from './product/services/product.service';
import { PostsComponent } from './posts/posts.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { TodosComponent } from './todos/todos.component';
import { TodoAddNewComponent } from './todos/todo-add-new/todo-add-new.component';
import { PhotosComponent } from './photos/photos.component';



import { from } from 'rxjs';
import { CustominterceptorService } from './interceptor/Service/custominterceptor.service';
import { EmployeeOnboardingComponent } from './employee/employee-onboarding/employee-onboarding.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    EmployeeListComponent,
    BookComponentComponent,
    BooklistComponentComponent,
    ProductComponent,
    ProductListComponent,
    ContainerComponent,
    PostsComponent,
    PostsListComponent,
    PostAddComponent,
    TodosComponent,
    TodoAddNewComponent,
    PhotosComponent,
    EmployeeOnboardingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //add this module.
    FormsModule, //add this for plane Template html forms.
    ReactiveFormsModule //add this for Reactive Driven forms.
  ],
  // providers: [ProductService],
  providers: [{ provide: ProductService, useClass: ProductService },
  { provide: HTTP_INTERCEPTORS, useClass: CustominterceptorService, multi: true }], //Add  this intercepter which is made by me [Custominterceptorservive]. 
  bootstrap: [AppComponent]
})
export class AppModule { }
