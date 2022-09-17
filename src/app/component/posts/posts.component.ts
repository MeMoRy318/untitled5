import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  posts:IPost[];

  ngOnInit(): void {
    this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(value => this.posts = value)
  }

}
