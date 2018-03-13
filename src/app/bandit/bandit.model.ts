
export class Bandit{
    id:number;
    fake_name:string;
    real_name:string;

    constructor(id, fake_name, real_name){
        this.id = id;
        this.fake_name = fake_name;
        this.real_name = real_name;
    }
}