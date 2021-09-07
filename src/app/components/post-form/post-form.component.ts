import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onAddPost(f: any) {
    console.log(f.form.value);
  }
}
