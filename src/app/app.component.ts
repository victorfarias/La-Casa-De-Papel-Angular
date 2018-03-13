import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La Casa de Papel';
  bandits = ["Tóquio", "Rio", "Berlin", "Professor"];

  filhoFoiClicado(dado){
    console.log(dado);
  }

  addBandit(name){
    this.bandits.push(name);
  }
}
