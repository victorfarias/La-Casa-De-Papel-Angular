import { Bandit } from './../../../models/bandit.model';
import { BanditService } from './../../../services/bandit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandit-page',
  templateUrl: './bandit-page.component.html',
  styleUrls: ['./bandit-page.component.css']
})
export class BanditPageComponent implements OnInit {

  bandits: Bandit[];

  constructor(private banditService: BanditService) {
   }

  ngOnInit() {
    // this.bandits = this.banditService.getBandits();
    this.banditService.getBandits()
      .subscribe((data) => {
        this.bandits = data;
      }, 
      (error) => console.log(error));
  }

  addBandit(bandit: Bandit){
    this.banditService.addBandit(bandit)
      .subscribe((data) => console.log(data),
                (error)=>console.log(error));
  }

  removeBandit(bandit:Bandit){
    this.banditService.removebandit(bandit);
  }

}
