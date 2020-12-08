import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDetail } from '../../model/userdetail.model';
import { DialogDataUser } from '../../model/userlist.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public userDetail: UserDetail;
  public imgUrl: string;
  public googleMapUrl: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogDataUser,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserDetail(this.data.userId);
  }

  getUserDetail(id: string) {
    this.userService.getUserDetail(id).subscribe(userdetail => {

      this.imgUrl =
        userdetail.location.state + ',' + userdetail.location.street + ',' + userdetail.location.city + ',' + userdetail.location.country;

      // this.googleMapUrl =
      //   `https://maps.googleapis.com/maps/api/staticmap?markers=${this.imgUrl}&center=${this.imgUrl}&zoom=8&size=600x300&key=AIzaSyD9dyB7_5evAcVtSOf92NlVO8Cp0OdEwTA`;


      this.userDetail = userdetail;

      console.log('userDetail ---> ', this.userDetail);
    });
  }
}
