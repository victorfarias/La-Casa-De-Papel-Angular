import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})
export class TitleComponent{
    @Input() title: string;
    @Output() foiClicado = new EventEmitter();
    temNovaCor = true;
    fontSize = 60;

    getTitle(){
        return 'Titulo vindo do método: '+ this.title;
    }

    onClick(){
        this.temNovaCor = !this.temNovaCor;
        this.fontSize ++;
        this.foiClicado.emit({mensagem: "fui clicado"});
    }
}