import { Bandit } from './../bandit/bandit.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bandit-list',
  templateUrl: './bandit-list.component.html',
  styleUrls: ['./bandit-list.component.css']
})
export class BanditListComponent implements OnInit {

  @Input() bandits: Bandit[];

  constructor() { }

  ngOnInit() {
  }

}
