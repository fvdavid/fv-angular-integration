import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsListComponent } from './features/dashboard/component/comments-list/comments-list.component';
import { PostByTagComponent } from './features/dashboard/component/post-by-tag/post-by-tag.component';
import { PostsListComponent } from './features/dashboard/component/posts-list/posts-list.component';
import { TagListComponent } from './features/dashboard/component/tag-list/tag-list.component';
import { UserListComponent } from './features/user/component/user-list/user-list.component';
import { UserPostsComponent } from './features/user/component/user-posts/user-posts.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'user-posts/:id',
    component: UserPostsComponent
  },
  {
    path: 'posts-list',
    component: PostsListComponent
  },
  {
    path: 'comments-list',
    component: CommentsListComponent
  },
  {
    path: 'tag-list',
    component: TagListComponent
  },
  {
    path: 'post-by-tag/:tagName',
    component: PostByTagComponent
  },
  {
    path: 'post-by-tag',
    component: PostByTagComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
