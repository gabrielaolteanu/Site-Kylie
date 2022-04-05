import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-bar',
  templateUrl: './first-bar.component.html',
  styleUrls: ['./first-bar.component.css']
})
export class FirstBarComponent implements OnInit {
present: boolean= true;
  constructor() { }

  ngOnInit(): void {
  }
hidden(): void {
  this.present=!this.present
};
}
