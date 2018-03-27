import { Bandit } from './../../../models/bandit.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-bandit',
  templateUrl: './input-bandit.component.html',
  styleUrls: ['./input-bandit.component.css']
})
export class InputBanditComponent {

  @Output() newBandit = new EventEmitter();
  id_bandit: String;
  name_real: String = "";
  name_fake: String = "";

  constructor() { }

  onSubmit(event){
    event.preventDefault();
    this.newBandit.emit(
      new Bandit(this.id_bandit, this.name_fake, this.name_real));
  }

  validar(){
    // if(this.name == ""){
    //   this.input1Error = true;
    // }else{
    //   this.input1Error = false;
    // }
  }

}
