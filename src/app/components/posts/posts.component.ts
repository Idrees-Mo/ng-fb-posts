import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any = [];

  constructor(private ps: PostsService) {}

  ngOnInit(): void {
    this.ps.fecthPost().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
