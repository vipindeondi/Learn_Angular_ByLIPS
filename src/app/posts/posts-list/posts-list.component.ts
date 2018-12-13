import { Component, OnInit, Input } from '@angular/core';
import { Iposts } from '../service/Iposts';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input() postLists : Iposts[];
  constructor() { }

  ngOnInit() {
  }

}
