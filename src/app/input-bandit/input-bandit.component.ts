import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-bandit',
  templateUrl: './input-bandit.component.html',
  styleUrls: ['./input-bandit.component.css']
})
export class InputBanditComponent {

  @Output() newBandit = new EventEmitter();

  constructor() { }

  onSubmit(event, campo){
    event.preventDefault();
    this.newBandit.emit(campo.value);
  }

}
