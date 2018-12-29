import { Component, OnInit } from '@angular/core';
import { Iuser } from './userregistration.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: Iuser = {
    city: '',
    dob: new Date(),
    email: '',
    firstName: '',
    lastName: ''

  };
  constructor() { }

  ngOnInit() {
  }

}
