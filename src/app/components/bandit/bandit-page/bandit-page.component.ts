import { Bandit } from './../../../models/bandit.model';
import { BanditService } from './../../../services/bandit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandit-page',
  templateUrl: './bandit-page.component.html',
  styleUrls: ['./bandit-page.component.css'],
  providers: [BanditService]
})
export class BanditPageComponent implements OnInit {

  bandits: Bandit[];

  constructor(private banditService: BanditService) {
   }

  ngOnInit() {
    this.bandits = this.banditService.getBandits();
  }

  addBandit(bandit: Bandit){
    this.banditService.addBandit(bandit);
  }

  removeBandit(bandit:Bandit){
    this.banditService.removebandit(bandit);
  }

}
