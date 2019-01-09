import { Component, OnInit, Output } from '@angular/core';

import {HCard} from './../../model/hcard';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-hcard-edit',
  templateUrl: './hcard-edit.component.html',
  styleUrls: ['./hcard-edit.component.scss']
})
export class HcardEditComponent implements OnInit {
  
 @Output() valueChange:EventEmitter<HCard> = new EventEmitter<HCard>();
  
  hcard: HCard = {
     
    givenname: '',
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

  get givenName():string {
    return this.hcard.givenname;
  }

  set givenName(value:string){
    this.hcard.givenname=value;
    this.valueChange.emit(this.hcard);
  }

  get surName():string {
    return this.hcard.surname;
  }

  set surName(value:string){
    this.hcard.surname=value;
    this.valueChange.emit(this.hcard);
  }

  get email():string {
    return this.hcard.email;
  }

  set email(value:string){
    this.hcard.email=value;
    this.valueChange.emit(this.hcard);
  }

  get phone():string {
    return this.hcard.phone;
  }

  set phone(value:string){
    this.hcard.phone=value;
    this.valueChange.emit(this.hcard);
  }

  get house():string {
    return this.hcard.house;
  }

  set house(value:string){
    this.hcard.house=value;
    this.valueChange.emit(this.hcard);
  }

  get street():string {
    return this.hcard.street;
  }

  set street(value:string){
    this.hcard.street=value;
    this.valueChange.emit(this.hcard);
  }

  get suburb():string {
    return this.hcard.suburb;
  }

  set suburb(value:string){
    this.hcard.suburb=value;
    this.valueChange.emit(this.hcard);
  }

  get postcode():string {
    return this.hcard.postcode;
  }

  set postcode(value:string){
    this.hcard.postcode=value;
    this.valueChange.emit(this.hcard);
  }

  get state():string {
    return this.hcard.state;
  }

  set state(value:string){
    this.hcard.state=value;
    this.valueChange.emit(this.hcard);
  }

  get country():string {
    return this.hcard.country;
  }

  set country(value:string){
    this.hcard.country=value;
    this.valueChange.emit(this.hcard);
  }

  constructor() { }

  ngOnInit() {
  }

}
