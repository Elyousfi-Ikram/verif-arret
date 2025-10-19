// app.routes.ts — ajout wildcard pour 404
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { DecouvrirComponent } from './components/decouvrir/decouvrir';
import { PrestationsComponent } from './components/prestations/prestations';
import { EngagementComponent } from './components/engagement/engagement';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'decouvrir', component: DecouvrirComponent },
    { path: 'prestations', component: PrestationsComponent },
    { path: 'engagements', component: EngagementComponent },
    { path: '**', redirectTo: '' }
];
