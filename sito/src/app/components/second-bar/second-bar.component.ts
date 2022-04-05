import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-second-bar',
  templateUrl: './second-bar.component.html',
  styleUrls: ['./second-bar.component.css']
})
export class SecondBarComponent implements OnInit {
show: boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

}
