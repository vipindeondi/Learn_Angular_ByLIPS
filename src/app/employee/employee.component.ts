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

  employee: IEmployee = { id: 1, address: 'Pune', name: 'Sachin' };

  empList: IEmployee[] = [
    { id: 1, address: 'Pune', name: 'Sachin' },
    { id: 2, address: 'Pune', name: 'Amit' },
    { id: 3, address: 'Pune', name: 'Virat' }
  ];

  constructor() { }

  toggle() {
    this.hidden = !this.hidden;
  }

  addEmployee() {
    this.empList = [{ id: 4, name: 'Amit', address: 'Mumbai' }];
  }
  receiveFromChild(employee: IEmployee) {
    console.log(employee);
    this.employee = employee;
  }
}
