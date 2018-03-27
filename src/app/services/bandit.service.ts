import { Injectable } from '@angular/core'
import { Bandit } from '../models/bandit.model'

@Injectable()
export class BanditService {

    bandits = [
        new Bandit(1, "Professor", "Segio Molina"),
        new Bandit(2, "Toquio", "Alguma Coisa Flores")
    ];

    getBandits() {
        return this.bandits;
    }

    addBandit(bandit: Bandit){
        this.bandits.push(bandit);
    }

    removebandit(bandit: Bandit){
        let index = this.bandits.indexOf(bandit);
        this.bandits.splice(index, 1);
    }

}