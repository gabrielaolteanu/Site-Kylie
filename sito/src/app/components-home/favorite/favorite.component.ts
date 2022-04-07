import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/model/card';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
_card: ICard = {
  url: "",
  text: "COLLECTION DELUXE",
  type: "button"
}


@Input() set card (value: Partial<ICard>){
  this._card={...this._card, ...value}
}
  constructor() { }

  ngOnInit(): void {
  }

}
