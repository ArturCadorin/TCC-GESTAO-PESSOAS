import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

// Declaração do conteudo da sidebar.
export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidenav-content',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule, MatExpansionModule],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.scss'
})
export class SidenavContentComponent {

  // Função para colapsar a sidebar.
  sidenavCollapsed = signal(false);
  @Input() set collapsed(val: boolean){
    this.sidenavCollapsed.set(val);
  }

  // Conteudo da sidebar.
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Info. Gerais',
      route: 'info-gerais',
      children: [
        {icon: 'dashboard', label: 'Dashboard', route: 'info-gerais/dashboard'},
      ],
    },
    {
      icon: 'sort',
      label: 'Estrutura',
      route: 'estrutura',
      children: [
        {icon: 'business', label: 'Empresa', route: 'estrutura/empresas'},
        {icon: 'category', label: 'Setores', route: 'estrutura/setores'},
        {icon: 'badge', label: 'Cargos', route: 'estrutura/cargos'},
      ],
    },
    {
      icon: 'group',
      label: 'Pessoas',
      route: 'pessoas',
      children: [
        {icon: 'person', label: 'Pessoa Fisíca', route: 'pessoas/pessoa-fisica'},
        {icon: 'how_to_reg', label: 'Matrículas', route: 'pessoas/matriculas'},
        {icon: 'group', label: 'Usuários', route: 'pessoas/usuarios'},
      ],
    },
    {
      icon: 'rocket_launch',
      label: 'Carreiras',
      route: 'carreiras',
      children: [
        {icon: 'trending_up', label: 'Planos', route: 'carreiras/plano-carreira'},
        {icon: 'attach_money', label: 'Níveis', route: 'carreiras/niveis'},
      ], 
    }
  ]);
}
  