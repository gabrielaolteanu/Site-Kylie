import { Component, Input, OnInit } from '@angular/core';
import { IButton } from 'src/app/model/button';

@Component({
  selector: 'app-link-gabri',
  templateUrl: './link-gabri.component.html',
  styleUrls: ['./link-gabri.component.css']
})
export class LinkGabriComponent implements OnInit {
  _button: IButton=  {
   label :"CLICK HERE",
   link: "",
   type: "btn-dark"}
  
  
 @Input() set button(value: Partial<IButton>){
  this._button= {...this._button, ...value}
  }
  



 constructor() { }

  ngOnInit(): void {
  }

}
