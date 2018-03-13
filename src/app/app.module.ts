import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { BanditListComponent } from './bandit-list/bandit-list.component';
import { InputBanditComponent } from './input-bandit/input-bandit.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    BanditListComponent,
    InputBanditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
