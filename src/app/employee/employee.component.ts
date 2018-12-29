import { Component, OnInit } from '@angular/core';

import { IEmployee } from './IEmployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  name: string = 'Test';

  hidden: boolean = false;

  employee: IEmployee = { id: 1, address: 'Pune', name: 'Sachin',dob:new Date("20-dec-1992"),salary:1900 };

  empList: IEmployee[] = [
    { id: 1, address: 'Pune', name: 'Sachin',dob:new Date("20-dec-1992"),salary:1957 },
    { id: 2, address: 'Pune', name: 'Amit',dob:new Date("14-nov-1993"),salary:1956 },
    { id: 3, address: 'Pune', name: 'Virat',dob:new Date("26-jan-1995"),salary:1904 }
  ];

  constructor() { }

  toggle() {
    this.hidden = !this.hidden;
  }

  addEmployee() {
    this.empList = [{ id: 4, name: 'Amit', address: 'Mumbai',dob:new Date("24-mar-1997"),salary:1980 }];
  }
  receiveFromChild(employee: IEmployee) {
    console.log(employee);
    this.employee = employee;
  }
}
