import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/IUser";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUser[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(value => this.users = value)
  }

}
