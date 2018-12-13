import { Component, OnInit, Input, Output,EventEmitter, OnChanges,  SimpleChanges } from '@angular/core';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges {

  @Input() employeeList: IEmployee;
  @Input() title: string;
  @Output() sendToParent: EventEmitter<IEmployee> = new EventEmitter<IEmployee>();

  constructor() { }
  
//  Onchanges Uses for child component to parent component relation without use input event..

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Change is called');
    console.log(changes);
  }
  
  ngOnInit() {
    console.log('OnInit is called');
  }

  selectEmployee(employee: IEmployee) {
    console.log(employee);
    this.sendToParent.emit(employee);
  }

}
