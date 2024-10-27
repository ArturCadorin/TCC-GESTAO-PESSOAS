import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { EmpresaComponent } from './components/estrutura/empresa/empresa.component';
import { PessoaFisicaComponent } from './components/pessoas/pessoa-fisica/pessoa-fisica.component';
import { PlanosComponent } from './components/carreiras/planos/planos.component';
import { SetorComponent } from './components/estrutura/setor/setor.component';
import { CargoComponent } from './components/estrutura/cargo/cargo.component';
import { MatriculasComponent } from './components/pessoas/matriculas/matriculas.component';
import { UsuariosComponent } from './components/pessoas/usuarios/usuarios.component';
import { NiveisComponent } from './components/carreiras/niveis/niveis.component';



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
            },
        ],
    },
    {
        path: 'estrutura',
        children: [
            {
                path: 'empresas',
                component: EmpresaComponent,
            },
            {
                path: 'setores',
                component: SetorComponent,
            },
            {
                path: 'cargos',
                component: CargoComponent,
            },
        ],
    },
    {
        path: 'pessoas',
        children: [
            {
                path: 'pessoa-fisica',
                component: PessoaFisicaComponent,
            },
            {
                path: 'matriculas',
                component: MatriculasComponent,
            },
            {
                path: 'usuarios',
                component: UsuariosComponent,
            },
        ],
    },
    {
        path: 'carreiras',
        children: [
            {   
                path: 'plano-carreira',
                component: PlanosComponent,
            },
            {
                path: 'niveis',
                component: NiveisComponent,
            },
        ],
    },
];
