import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../models/posts';
import { Comments } from '../models/comments';
import { Photos } from '../models/photos';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private _posts: string = 'https://jsonplaceholder.typicode.com/posts';
  private _comments: string = 'https://jsonplaceholder.typicode.com/comments';
  private _photos: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}
  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this._posts);
  }

  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this._comments);
  }
  getPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(this._photos);
  }
}
