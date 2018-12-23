import { Component } from '@angular/core';
import {LoginService }from './logincomponent/service/login.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : `<h1>Hello World
  // From Angualr </h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelManagementApp-V7';

  role: string = 'Super-User';

  constructor(public loginservice:LoginService){

  }
}
