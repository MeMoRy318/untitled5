import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../modules/IUser";

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
