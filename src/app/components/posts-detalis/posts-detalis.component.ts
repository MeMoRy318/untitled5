import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPosts} from "../../modules/IPosts";

@Component({
  selector: 'app-posts-detalis',
  templateUrl: './posts-detalis.component.html',
  styleUrls: ['./posts-detalis.component.css']
})
export class PostsDetalisComponent implements OnInit {

  detalis:IPosts;

  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(value => {

      this.detalis = history.state

    })

  }

}
