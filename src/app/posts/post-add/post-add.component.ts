import { Component, OnInit } from '@angular/core';
import { Iposts } from '../service/Iposts';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  posts: Iposts = {
    body: '',
    id: 0,
    title: '',
    userId: 0
  };
  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  addPost() {
    this.postsService.addPost(this.posts).subscribe((data) => console.log(data));
    console.log(this.posts);
  }
}
