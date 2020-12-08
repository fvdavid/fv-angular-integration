import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserCommentComponent } from 'src/app/features/user/component/user-comment/user-comment.component';
import { UserDetailComponent } from 'src/app/features/user/component/user-detail/user-detail.component';
import { UserPosts } from 'src/app/features/user/model/userposts.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(
    private dashboarService: DashboardService,
    private dialog: MatDialog
  ) { }

  allPost: UserPosts;
  gridColumns = 4;

  ngOnInit(): void {
    this.getAllPostsList();
  }

  getAllPostsList() {
    this.dashboarService.getAllPostsList().subscribe(allpost => {
      this.allPost = allpost;

      console.log('allPost ---> ', this.allPost);
    });
  }

  gotoComment(id: string) {
    this.dialog.open(UserCommentComponent, {
      data: {
        userId: id
      }
    });
  }

  gotoOwner(id: string) {
    this.dialog.open(UserDetailComponent, {
      data: {
        userId: id
      }
    });
  }
}
