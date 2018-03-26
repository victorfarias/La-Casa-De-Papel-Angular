import { Routes, RouterModule } from '@angular/router'

import { BanditPageComponent } from './components/bandit/bandit-page/bandit-page.component';
import { HostagesListComponent } from './hostages-list/hostages-list.component';

const APP_ROUTES: Routes =[
    {path:"", redirectTo:"/bandits",pathMatch:"full"},
    {path:"bandits", component:BanditPageComponent},
    {path:"hostages", component:HostagesListComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);