import { Bandit } from './../models/bandit.model';
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class BanditService {

    url:string = "http://rest.learncode.academy/api/victor/bandit";

    constructor(private http: Http){}

    bandits:Bandit[] = [];

    getBandits() {
        return this.http.get(this.url)
                .map((response:Response) => {
                    for(let b of response.json()){
                        this.bandits.push(new Bandit(b.id, b.fake_name, b.real_name))
                    }
                    return this.bandits;
                })
                .catch((error: Response) => Observable.throw(error))
    }

    addBandit(bandit: Bandit){
        return this.http.post(this.url, bandit)
                .map((response: Response) =>  response.json())
                .catch((error: Response) => Observable.throw(error))

    }

    removebandit(bandit: Bandit){
        let index = this.bandits.indexOf(bandit);
        this.bandits.splice(index, 1);
    }

}