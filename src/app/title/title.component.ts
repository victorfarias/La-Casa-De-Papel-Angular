import { Component } from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html'
})
export class TitleComponent{
    title: string = "A casa de papel do componente"

    getTitle(){
        return 'Titulo vindo do método: '+ this.title;
    }
}