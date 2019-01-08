import { Component, OnInit } from '@angular/core';

import {HCard} from './../../Model/HCard';
@Component({
  selector: 'app-hcard-edit',
  templateUrl: './hcard-edit.component.html',
  styleUrls: ['./hcard-edit.component.scss']
})
export class HcardEditComponent implements OnInit {
  model: HCard = {
     
    givenname: 'Windstorm',
    surname:'',
    email:'',
    phone:'',
    house: '',
    street: '',
    suburb :'',
    postcode:'', 
    state:'', 
    country:''
  };

  constructor() { }

  ngOnInit() {
  }

}
