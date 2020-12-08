import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UserCommentComponent } from 'src/app/features/user/component/user-comment/user-comment.component';
import { UserDetailComponent } from 'src/app/features/user/component/user-detail/user-detail.component';
import { UserPosts } from 'src/app/features/user/model/userposts.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-post-by-tag',
  templateUrl: './post-by-tag.component.html',
  styleUrls: ['./post-by-tag.component.scss']
})
export class PostByTagComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private dialog: MatDialog
  ) { }

  userPosts: UserPosts;
  gridColumns = 4;

  ngOnInit(): void {
    let tagName = this.route.snapshot.paramMap.get('tagName');
    if (tagName === null) {
      tagName = 'pet';
    }

    this.getPostByTag(tagName);
  }

  getPostByTag(tagName: string) {
    this.dashboardService.getPostByTag(tagName).subscribe(fv => this.userPosts = fv);
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
