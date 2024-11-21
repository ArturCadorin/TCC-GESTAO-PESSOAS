import { Routes } from '@angular/router';
import { EmpresaComponent } from './components/estrutura/empresa/empresa/empresa.component';
import { SetorComponent } from './components/estrutura/setor/setor/setor.component';
import { CargoComponent } from './components/estrutura/cargo/cargo/cargo.component';
import { MatriculasComponent } from './components/pessoal/matriculas/matriculas/matriculas.component';
import { NiveisComponent } from './components/carreira/niveis/niveis/niveis.component';
import { DashboardComponent } from './components/info-gerais/dashboard/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'info-gerais',
        component: DashboardComponent,
        children: [
            {
                path: 'dashboard', 
                component: DashboardComponent,
                data: {
                    title: 'Dashboard',
                },
            },
        ],
    },
    {
        path: 'estrutura',
        children: [
            {
                path: 'empresas',
                component: EmpresaComponent,
                data: {
                    title: 'Empresas',
                },
            },
            {
                path: 'setores',
                component: SetorComponent,
                data: {
                    title: 'Setores',
                },
            },
            {
                path: 'cargos',
                component: CargoComponent,
                data: {
                    title: 'Cargos',
                },
            },
        ],
    },
    {
        path: 'pessoas',
        children: [
            {
                path: 'matriculas',
                component: MatriculasComponent,
                data: {
                    title: 'Matrículas',
                },
            },
        ],
    },
    {
        path: 'carreiras',
        children: [
            {   
                path: 'plano-carreira',
                component: NiveisComponent,
                data: {
                    title: 'Plano de Carreira',
                },
            },
        ],
    },
];
