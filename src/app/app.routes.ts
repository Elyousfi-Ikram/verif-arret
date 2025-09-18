import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { DecouvrirComponent } from './components/decouvrir/decouvrir';
import { PrestationsComponent } from './components/prestations/prestations';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'decouvrir', component: DecouvrirComponent },
    { path: 'prestations', component: PrestationsComponent },

];
