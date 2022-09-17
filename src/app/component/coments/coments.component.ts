import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IComent} from "../../models/IComent";

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {

  coments:IComent[];

  constructor( private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<IComent[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(value => this.coments = value)
  }

}
