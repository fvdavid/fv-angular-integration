import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from 'src/app/features/user/model/userposts.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) { }

  tagList: Tag;
  gridColumns = 4;

  ngOnInit(): void {
    this.getAllTagList();
  }

  getAllTagList() {
    this.dashboardService.getAllTagList().subscribe(tag => {
      this.tagList = tag;

      console.log('tagList ---> ', this.tagList);
    });
  }

  postByTag(tagName: string) {
    this.router.navigateByUrl(`/post-by-tag/${tagName}`, { skipLocationChange: true });
  }

}
