import { Routes, RouterModule } from '@angular/router'

import { HostagesListComponent } from './hostages-list/hostages-list.component';
import { BanditListComponent } from './bandit-list/bandit-list.component';

const APP_ROUTES: Routes =[
    {path:"", redirectTo:"/bandits",pathMatch:"full"},
    {path:"bandits", component:BanditListComponent},
    {path:"hostages", component:HostagesListComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);