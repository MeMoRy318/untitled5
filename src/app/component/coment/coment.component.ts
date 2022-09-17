import {Component, Input, OnInit} from '@angular/core';
import {IComent} from "../../models/IComent";

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent  {

 @Input()
  coment:IComent;

}
