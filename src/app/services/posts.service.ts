import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  addPost(post: Post) {
    return this.http.post(
      'https://ng-posts-343fe-default-rtdb.asia-southeast1.firebasedatabase.app/',
      { title: post.title, description: post.description }
    );
  }
}
