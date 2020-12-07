import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostComment } from '../../model/postcomment.model';

import { DialogDataUser } from '../../model/userlist.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.scss']
})
export class UserCommentComponent implements OnInit {

  postComments: PostComment;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogDataUser,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getPostComment(this.data.userId);
  }

  getPostComment(id: string) {
    this.userService.getPostsComment(id).subscribe(xx => {
      this.postComments = xx;
      console.log('xx ---------> ', this.postComments);
    });
  }

}
