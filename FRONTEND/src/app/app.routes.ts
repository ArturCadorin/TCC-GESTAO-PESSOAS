import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { CardPessoasComponent } from './components/pessoas/card-pessoas/card-pessoas.component';
import { CardEstruturaComponent } from './components/estrutura/card-estrutura/card-estrutura.component';
import { CardCarreirasComponent } from './components/carreiras/card-carreiras/card-carreiras.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'estrutura',
        component: CardEstruturaComponent,
    },
    {
        path: 'pessoas',
        component: CardPessoasComponent,
    },
    {
        path: 'carreiras',
        component: CardCarreirasComponent,
    },
];
