import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-bandit',
  templateUrl: './input-bandit.component.html',
  styleUrls: ['./input-bandit.component.css']
})
export class InputBanditComponent {

  @Output() newBandit = new EventEmitter();
  name: string = "";
  input1Error = true;

  constructor() { }

  onSubmit(event){
    event.preventDefault();
    this.name = this.name.substring(0, this.name.length-1)
    this.newBandit.emit(this.name);
  }

  validar(){
    if(this.name == ""){
      this.input1Error = true;
    }else{
      this.input1Error = false;
    }
  }

}
