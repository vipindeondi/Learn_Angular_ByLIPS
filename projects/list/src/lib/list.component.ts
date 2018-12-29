import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'lib-list',
  templateUrl: 'list.component.html' , 
  styles: []
})
export class ListComponent implements OnInit {
@Input() headers :any;
  constructor() { }

  ngOnInit() {
  }

}
