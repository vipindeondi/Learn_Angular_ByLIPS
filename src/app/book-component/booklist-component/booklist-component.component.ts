import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { IBook } from '../IBook';

@Component({
  selector: 'app-booklist-component',
  templateUrl: './booklist-component.component.html',
  styleUrls: ['./booklist-component.component.css']
})
export class BooklistComponentComponent implements OnInit {
@Input() booklist: IBook;
@Output() sendToParent: EventEmitter<IBook> = new EventEmitter<IBook>();
  constructor() { }

  ngOnInit() {
  }


  selectBook(B:IBook){
    console.log(B);
    this.sendToParent.emit(B);

  }

}
