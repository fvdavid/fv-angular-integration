import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';

import { UserListComponent } from './user/component/user-list/user-list.component';
import { UserDetailComponent } from './user/component/user-detail/user-detail.component';
import { UserPostsComponent } from './user/component/user-posts/user-posts.component';
import { UserCommentComponent } from './user/component/user-comment/user-comment.component';
import { PostsListComponent } from './dashboard/component/posts-list/posts-list.component';
import { CommentsListComponent } from './dashboard/component/comments-list/comments-list.component';
import { TagListComponent } from './dashboard/component/tag-list/tag-list.component';
import { PostByTagComponent } from './dashboard/component/post-by-tag/post-by-tag.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserPostsComponent,
    UserCommentComponent,
    PostsListComponent,
    CommentsListComponent,
    TagListComponent,
    PostByTagComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressBarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatChipsModule
  ],
})
export class FeaturesModule { }
