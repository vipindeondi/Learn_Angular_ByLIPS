import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { FormsModule } from '@angular/forms';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    // CommonModule,
    // FormsModule,
    SharedModule,
     PostsRoutingModule
  ],
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostAddComponent,

  ]
})
export class PostsModule { }

