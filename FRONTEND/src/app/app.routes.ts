import { Routes } from '@angular/router';
import { EmpresaComponent } from './components/estrutura/empresa/empresa/empresa.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'info-gerais',
        component: EmpresaComponent,
        children: [
            {
                path: 'dashboard', 
                component: EmpresaComponent,
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
                component: EmpresaComponent,
                data: {
                    title: 'Setores',
                },
            },
            {
                path: 'cargos',
                component: EmpresaComponent,
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
                component: EmpresaComponent,
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
                component: EmpresaComponent,
                data: {
                    title: 'Plano de Carreira',
                },
            },
        ],
    },
];
