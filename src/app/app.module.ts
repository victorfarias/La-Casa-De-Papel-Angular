import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { BanditListComponent } from './bandit-list/bandit-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    BanditListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
