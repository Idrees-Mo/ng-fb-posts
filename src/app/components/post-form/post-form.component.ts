import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  posts: Post[] = [];
  constructor(private ps: PostsService) {}

  ngOnInit(): void {}

  onAddPost(post: Post) {
    this.ps.addPost(post).subscribe((data) => {
      console.log(data);
    });
  }
}
