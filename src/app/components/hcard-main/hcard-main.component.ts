import { Component, OnInit } from '@angular/core';
import { HCard } from 'src/app/model/hcard';

@Component({
  selector: 'app-hcard-main',
  templateUrl: './hcard-main.component.html',
  styleUrls: ['./hcard-main.component.scss']
})
export class HcardMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayCard:HCard;
  onValueChange(value:HCard)
  {
    this.displayCard=value;

  }
}
