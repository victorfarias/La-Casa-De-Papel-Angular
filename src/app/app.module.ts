import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { BanditListComponent } from './bandit-list/bandit-list.component';
import { InputBanditComponent } from './input-bandit/input-bandit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HostagesListComponent } from './hostages-list/hostages-list.component';
import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    BanditListComponent,
    InputBanditComponent,
    NavbarComponent,
    HostagesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    routing   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
