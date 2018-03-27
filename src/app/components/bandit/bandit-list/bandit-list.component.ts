import { Bandit } from '../../../models/bandit.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bandit-list',
  templateUrl: './bandit-list.component.html',
  styleUrls: ['./bandit-list.component.css']
})
export class BanditListComponent implements OnInit {

  @Input() bandits: Bandit[];
  @Output() removeBandit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickRemove(bandit:Bandit){
    this.removeBandit.emit(bandit);
  }

}
