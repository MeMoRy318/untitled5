import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {IUser} from "../../modules/IUser";

@Component({
  selector: 'app-users-detalis',
  templateUrl: './users-detalis.component.html',
  styleUrls: ['./users-detalis.component.css']
})
export class UsersDetalisComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute, private userServices:UsersService) { }

  user:IUser;

  ngOnInit(): void {

    this.activateRoute.params.subscribe(({id}) => {

      this.userServices.getUser(id)

        .subscribe(value => this.user = value)

    })

  }

}
