import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

// Declaração do conteudo da sidebar.
export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidenav-content',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
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
      route: 'dashboard',
    },
    {
      icon: 'sort',
      label: 'Estrutura',
      route: 'estrutura',
    },
    {
      icon: 'group',
      label: 'Pessoas',
      route: 'pessoas',
    },
    {
      icon: 'rocket_launch',
      label: 'Carreiras',
      route: 'carreiras',
    }
  ]);
}
  