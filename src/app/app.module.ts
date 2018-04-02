import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { BanditListComponent } from './components/bandit/bandit-list/bandit-list.component';
import { InputBanditComponent } from './components/bandit/input-bandit/input-bandit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HostagesListComponent } from './hostages-list/hostages-list.component';
import { routing } from './app.routing';
import { BanditPageComponent } from './components/bandit/bandit-page/bandit-page.component';
import { BanditService } from './services/bandit.service';



@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    BanditListComponent,
    InputBanditComponent,
    NavbarComponent,
    HostagesListComponent,
    BanditPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    routing,
    HttpModule
  ],
  providers: [BanditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
