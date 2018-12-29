import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostAddComponent } from './post-add/post-add.component';
import { PostsComponent } from './posts.component';
import { AuthGuard } from '../Guards/auth.guard';
import { PostAddGuard } from './service/Gaurd/post-add.guard';

const routes: Routes = [
  {
    // path: 'posts', component: PostsComponent,
    path: '', component: PostsComponent, //its for using lazy loading concept
    resolve:                                     // resolve gaurd. it is using for 
    {postList: PostAddGuard},
    canActivateChild: [PostAddGuard],
    children: [
      { path: ':id', component: PostAddComponent }
    ],
    canActivate: [AuthGuard]
  },
  // { path: 'posts/:id', component: PostAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
