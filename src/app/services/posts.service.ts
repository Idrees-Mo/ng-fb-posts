import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  addPost(post: Post) {
    return this.http.post(
      'https://ng-posts-343fe-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      { title: post.title, description: post.description }
    );
  }

  fecthPost() {
    return this.http
      .get(
        'https://ng-posts-343fe-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((data) => {
          const postArray = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              postArray.push({ ...data[key], id: key });
            }
          }
          return postArray;
        })
      );
  }
}
