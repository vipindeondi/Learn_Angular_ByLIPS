import { Component, OnInit } from '@angular/core';
import {IBook} from './IBook';
@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {


  book: IBook = {bookid: 1, bookname: 'c Language', authorname: 'Yashwant Kanetkar', pulishdate: '10-nov-1996', rating: 5};

 booklist: IBook [] = [
  {bookid: 2, bookname: 'c Language', authorname: 'Yashwant Kanetkar', pulishdate: '10-nov-1996', rating: 9.5},
  {bookid: 3, bookname: 'The C++ Programing Language', authorname: 'Bjrane Stroustrup', pulishdate: '22-nov-1997', rating: 8},
  {bookid: 4, bookname: '.Net Development', authorname: 'Matthew MacDonald', pulishdate: '12-jan-2010', rating: 9},
  {bookid: 5, bookname: 'Java Complete Reference', authorname: 'Yashwant Kanetkar', pulishdate: '05-Aug-1996', rating: 9.5},
  {bookid: 6, bookname: 'Php Language', authorname: 'Vikram Vasani', pulishdate: '15-Feb-2009', rating: 10},
  {bookid: 7, bookname: 'The Complete Reference C# Language', authorname: 'Herbert Schildt', pulishdate: '18-April-2009', rating: 8.9},
  {bookid: 8, bookname: 'Operating System', authorname: 'William Stelling', pulishdate: '08-Oct-2000', rating: 9},

 ];
  constructor() { }

  ngOnInit() {
  }


  receiveFromChild(b: IBook) {
    console.log(b);
    this.book = b;


  }
}
