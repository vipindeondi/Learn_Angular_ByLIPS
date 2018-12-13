import { Component, OnInit , ContentChild, AfterContentInit } from '@angular/core';
import { DepartmentComponent } from '../department/department.component';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(DepartmentComponent) deptComponent : DepartmentComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log('After content init');
    console.log(this.deptComponent);
    this.deptComponent.name = 'Value from content';
  }

}
