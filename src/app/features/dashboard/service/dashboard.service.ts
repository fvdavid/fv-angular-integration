import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ResponseErrorService } from 'src/app/shared/service/response-error/response-error.service';
import { Tag, UserPosts } from '../../user/model/userposts.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
    private resError: ResponseErrorService) { }

  private postsListUrl = 'https://dummyapi.io/data/api/post';
  private tagListUrls = 'https://dummyapi.io/data/api/tag';

  private appId = '5fcb1f07081dbfa727976cb8';

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'app-id': this.appId,
      }
    )
  };

  getAllPostsList(): Observable<UserPosts> {
    return this.http.get<UserPosts>(this.postsListUrl, this.httpOptions).pipe(
      catchError(this.resError.handleError<UserPosts>('getUserList - ${getUserList}'))
    );
  }

  getAllTagList(): Observable<Tag> {
    return this.http.get<Tag>(this.tagListUrls, this.httpOptions).pipe(
      catchError(this.resError.handleError<Tag>('getAllTagList - ${getAllTagList}'))
    );
  }

  getPostByTag(tagName: string): Observable<UserPosts> {
    const url = `${this.tagListUrls}/${tagName}/post`;
    return this.http.get<UserPosts>(url, this.httpOptions).pipe(
      catchError(this.resError.handleError<UserPosts>('getPostByTag - ${getPostByTag}'))
    );
  }

}
