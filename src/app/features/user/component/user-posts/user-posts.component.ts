import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PostComment } from '../../model/postcomment.model';
import { UserPosts } from '../../model/userposts.model';
import { UserService } from '../../service/user.service';
import { UserCommentComponent } from '../user-comment/user-comment.component';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  userPosts: UserPosts;
  postComments: PostComment;

  gridColumns = 4;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUserPosts(id);
  }

  public getUserPosts(id: string) {
    this.userService.getUserPosts(id).subscribe(userposts => {
      this.userPosts = userposts;

      console.log('userPosts ----> ', this.userPosts);
    });
  }

  public gotoComment(id: string) {
    this.dialog.open(UserCommentComponent, {
      data: {
        userId: id
      }
    });
  }
}
