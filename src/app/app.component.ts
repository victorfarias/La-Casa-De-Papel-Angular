import { Bandit } from './bandit/bandit.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La Casa de Papel';
  bandits = [
    new Bandit(1, "Professor", "Segio Molina"),
    new Bandit(2, "Toquio", "Alguma Coisa Flores")
  ];

  filhoFoiClicado(dado){
    // console.log(dado);
  }

  addBandit(name){
    this.bandits.push(name);
  }
}
