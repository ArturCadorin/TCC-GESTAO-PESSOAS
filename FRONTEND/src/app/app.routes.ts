import { Routes } from '@angular/router';
import { EmpresaComponent } from './components/estrutura/empresa/empresa/empresa.component';
import { SetorComponent } from './components/estrutura/setor/setor/setor.component';
import { CargoComponent } from './components/estrutura/cargo/cargo/cargo.component';

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
                path: 'pessoa-fisica',
                component: EmpresaComponent,
                data: {
                    title: 'Pessoa Física',
                },
            },
            {
                path: 'matriculas',
                component: EmpresaComponent,
                data: {
                    title: 'Matrículas',
                },
            },
            {
                path: 'usuarios',
                component: EmpresaComponent,
                data: {
                    title: 'Usuários',
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
            {
                path: 'niveis',
                component: EmpresaComponent,
                data: {
                    title: 'Níveis',
                },
            },
        ],
    },
];
