import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';// add for httpclient for rest api..
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DepartmentComponent } from './department/department.component';

import { BookComponentComponent } from './book-component/book-component.component';
import { BooklistComponentComponent } from './book-component/booklist-component/booklist-component.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ContainerComponent } from './container/container.component';
import { ProductService } from './product/services/product.service';

import { PhotosComponent } from './photos/photos.component';



import { from } from 'rxjs';
import { CustominterceptorService } from './interceptor/Service/custominterceptor.service';
//import { EmployeeOnboardingComponent } from './employee/employee-onboarding/employee-onboarding.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeModule } from './employee/employee.module';
// import { PostsModule } from './posts/posts.module';

import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { UserPipe } from './custom/user.pipe';
import { RegistrationComponent } from './registration/registration.component';
import { EmailvalidationDirective } from './custom/directive/emailvalidation.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//import { HoverDirective } from './custom/directive/hover.directive';
//import { SalaryPipe } from './custom/salary.pipe';


@NgModule({
  declarations: [
    AppComponent,

    DepartmentComponent,

    BookComponentComponent,
    BooklistComponentComponent,
    ProductComponent,
    ProductListComponent,
    ContainerComponent,

    // TodosComponent,
    // TodoAddNewComponent,
    PhotosComponent,

    NotfoundComponent,

    LogincomponentComponent,

    UserPipe,

    RegistrationComponent,

    EmailvalidationDirective,

   

    
  ],
  imports: [
    BrowserModule,

    HttpClientModule, //add this module.
    // FormsModule, //add this for plane Template html forms.
    //ReactiveFormsModule, //add this for Reactive Driven forms.
    SharedModule,
    EmployeeModule,
    // PostsModule,     for use lazy loading dont use this
    // TodosModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  // providers: [ProductService],
  providers: [{ provide: ProductService, useClass: ProductService },
  { provide: HTTP_INTERCEPTORS, useClass: CustominterceptorService, multi: true }], //Add  this intercepter which is made by me [Custominterceptorservive]. 
  bootstrap: [AppComponent]
})
export class AppModule { }
