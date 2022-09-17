import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../modules/IUser";

@Component({
  selector: 'app-user-detalis',
  templateUrl: './user-detalis.component.html',
  styleUrls: ['./user-detalis.component.css']
})
export class UserDetalisComponent  {

  @Input()
  use:IUser

}
