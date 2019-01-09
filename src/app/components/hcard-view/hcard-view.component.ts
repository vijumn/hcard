import { Component, OnInit, Input } from '@angular/core';
import {HCardView} from './../../Model/HCardView';
import { HCard } from 'src/app/model/hcard';
@Component({
  selector: 'app-hcard-view',
  templateUrl: './hcard-view.component.html',
  styleUrls: ['./hcard-view.component.scss']
})
export class HcardViewComponent implements OnInit {

  @Input() displaycard:HCard;

  constructor() { }

  ngOnInit() {
  }

}
