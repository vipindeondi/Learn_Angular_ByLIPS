import { Component, OnInit } from '@angular/core';
import { Iposts } from '../service/Iposts';
import { PostsService } from '../service/posts.service';
import { ActivatedRoute } from '@angular/router'; //Add ActivatedRoute for routing in post Module.and maily use for data send one page to another page.
import { from } from 'rxjs';

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

  id: number = 0;

  constructor(private postsService: PostsService,
    private route: ActivatedRoute) { } //add activeroute as a dependacy injection 

  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      this.id = + data.get('id');
      if (this.id > 0) {
        this.postsService.getPosById(this.id).subscribe( //getPostById()method is use for send data one page to another page.
          (response) => {
            this.posts = response;
          })
      }
    });
  }

  addPost() {
    if (this.id > 0) {
      this.postsService.updatePostById(this.posts).subscribe((data) => this.posts = data); //updatePostById() method is use for update data which is transfer one page to second page.
      console.log(this.posts);
    }
    else {
      this.postsService.addPost(this.posts).subscribe((data) => console.log(data));
      console.log(this.posts);
    }

  }
}
