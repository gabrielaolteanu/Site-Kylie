import { Component, Input, OnInit } from '@angular/core';
import { IButton } from 'src/app/model/button';
@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css']
})
export class ButtonPrimaryComponent implements OnInit {
_button: IButton = {
  label: "",
  link: "",
  type: "btn-primary"
}

@Input() set button(value: Partial<IButton>){
  this._button={...this._button, ...value}
}
  constructor() { }

  ngOnInit(): void {
  }

}
