import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../modules/IPosts";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {

  @Input()
  post:IPosts

  constructor(private router:Router,private activateRoute:ActivatedRoute) {
  }

  postsDetalis() {

   this.router.navigate(['detalis',this.post.id],{state:this.post,relativeTo:this.activateRoute})

  }
}
