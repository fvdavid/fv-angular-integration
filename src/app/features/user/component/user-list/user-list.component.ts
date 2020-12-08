import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User, UserList } from '../../model/userlist.model';
import { UserService } from '../../service/user.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  userList: UserList;
  users: User[];

  gridColumns = 4;

  ngOnInit(): void {
    this.userService.getUserList().subscribe(userList => this.users = userList.data);
    // this.users = this.userList.data;
  }

  public toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  public gotoUserDetails(id: string) {
    this.dialog.open(UserDetailComponent, {
      data: {
        userId: id
      }
    });
  }

  public gotoUserPosts(id: string) {
    this.router.navigateByUrl(`/user-posts/${id}`, { skipLocationChange: true });
  }
}
