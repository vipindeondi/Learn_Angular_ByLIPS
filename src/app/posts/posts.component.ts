import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {PostsService} from './service/posts.service';
import {Iposts} from './service/Iposts';
 import { from } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts: Iposts[];
  constructor(private postsService: PostsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  //   this.postsService.getPosts().subscribe((data)=>this.posts=data,
  //   (err)=>console.log('err'));

  this.route.data.subscribe(
    (data) => this.posts = data['postList']);
 }

}
