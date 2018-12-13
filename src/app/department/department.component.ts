import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {IDepartment} from './IDepartment';
import { from } from 'rxjs';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  encapsulation :ViewEncapsulation.None,
  host : { class : 'app-department' }
})
export class DepartmentComponent implements OnInit {

  name: string = 'Department_info';
  hidden: boolean = false;
 
  dep:IDepartment = { Id : 2,  Name : 'Sachin',Contact :97267783565};
  
  deplist : IDepartment[] = [
    {Id:1,Name:'Science',Contact:245787686},
    {Id:2,Name:'Computer-Science',Contact:12345},
    {Id:3,Name:'Social-Science',Contact:974677909366},
    {Id:4,Name:'Mathematics',Contact:678945567647}
  ];

  

  constructor() { }

  toggle() {
    this.hidden = !this.hidden;
  }

  ngOnInit() {
  }

}
