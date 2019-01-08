import { Component, OnInit } from '@angular/core';
import {HCardView} from './../../Model/HCardView';
@Component({
  selector: 'app-hcard-view',
  templateUrl: './hcard-view.component.html',
  styleUrls: ['./hcard-view.component.scss']
})
export class HcardViewComponent implements OnInit {
  model: HCardView = {
    givenname: 'Windstorm',
    surname:'',
    email:'',
    phone:'',
    postcode:'', 
    address:'', 
    country:''
  };
  constructor() { }

  ngOnInit() {
  }

}
