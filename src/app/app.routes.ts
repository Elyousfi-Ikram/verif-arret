import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { DecouvrirComponent } from './components/decouvrir/decouvrir';
import { PrestationsComponent } from './components/prestations/prestations';
import { EngagementComponent } from './components/engagement/engagement';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'decouvrir', component: DecouvrirComponent },
    { path: 'prestations', component: PrestationsComponent },
    { path: 'engagements', component: EngagementComponent },


];
