import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialExportsModule } from '../../material-exports.module';
import { RouterOutlet, RouterModule } from '@angular/router';

// Declaração do conteudo de navegação.
export type MenuItem = {
  icon?: string;
  label: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MaterialExportsModule, RouterOutlet, RouterModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  
  
  // Conteudo da navegação.
  menuItems = signal<MenuItem[]>([
    {
      label: 'INFO. GERAIS',
      route: 'info-gerais',
      children: [
        {icon: 'dashboard', label: 'Dashboard', route: 'info-gerais/dashboard'},
      ],
    },
    {
      label: 'ESTRUTURA',
      route: 'estrutura',
      children: [
        {icon: 'business', label: 'Empresas', route: 'estrutura/empresas'},
        {icon: 'category', label: 'Setores', route: 'estrutura/setores'},
        {icon: 'badge', label: 'Cargos', route: 'estrutura/cargos'},
      ],
    },
    {
      label: 'COLABORADORES',
      route: 'pessoas',
      children: [
        {icon: 'how_to_reg', label: 'Matrículas', route: 'pessoas/matriculas'},
      ],
    },
    {
      label: 'CARREIRAS',
      route: 'carreiras',
      children: [
        {icon: 'trending_up', label: 'Planos', route: 'carreiras/plano-carreira'},
      ], 
    }
  ]);
}
