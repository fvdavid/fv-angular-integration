import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ResponseErrorService } from 'src/app/shared/service/response-error/response-error.service';
import { PostComment } from '../model/postcomment.model';
import { UserDetail } from '../model/userdetail.model';
import { UserList } from '../model/userlist.model';
import { UserPosts } from '../model/userposts.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userListUrl = 'https://dummyapi.io/data/api/user';
  private userPostUrl = 'https://dummyapi.io/data/api/post';
  appId = '5fcb1f07081dbfa727976cb8';

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'app-id': this.appId,
      }
    )
  };

  constructor(
    private http: HttpClient,
    private responseErr: ResponseErrorService
  ) { }

  getUserList(): Observable<UserList> {
    return this.http.get<UserList>(this.userListUrl, this.httpOptions)
      .pipe(
        // tap((getUserList: UserList) => console.log('fetched UserList ---> ', getUserList)),
        catchError(this.responseErr.handleError<UserList>('getUserList - ${getUserList}'))
      );
  }

  getUserDetail(id: string): Observable<UserDetail> {
    const url = `${this.userListUrl}/${id}`;
    return this.http.get<UserDetail>(url, this.httpOptions).pipe(
      // tap(_ => this.log(`fetched getUserDetail id=${id}`)),
      catchError(this.responseErr.handleError<UserDetail>(`getUserDetail id=${id}`))
    );
  }

  getUserPosts(id: string): Observable<UserPosts> {
    const url = `${this.userListUrl}/${id}/post`;

    return this.http.get<UserPosts>(url, this.httpOptions).pipe(
      // tap(_ => this.log(`fetched getUserPosts id=${id}`)),
      catchError(this.responseErr.handleError<UserPosts>(`getUserPosts id=${id}`))
    );
  }

  getPostsComment(id: string): Observable<PostComment> {
    const url = `${this.userPostUrl}/${id}/comment`;
    return this.http.get<PostComment>(url, this.httpOptions).pipe(
      // tap(_ => this.log(`fetched getUserPosts id=${id}`)),
      catchError(this.responseErr.handleError<PostComment>(`getPostsComment id=${id}`)),
    );
  }
}
