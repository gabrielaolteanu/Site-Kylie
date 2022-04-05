import { Component, Input, OnInit } from '@angular/core';
import { IButton } from 'src/app/model/button';

@Component({
  selector: 'app-link-kim',
  templateUrl: './link-kim.component.html',
  styleUrls: ['./link-kim.component.css']
})
export class LinkKimComponent implements OnInit {
  _button: IButton=  {
    label :"FOR INFO",
    link: "",
    type: "btn-danger"}
   
   
 @Input() set button(value: Partial<IButton>){
   this._button= {...this._button, ...value}
   }


   
  constructor() { }

  ngOnInit(): void {
  }

}
