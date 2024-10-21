import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  icon: string;
}

@Component({
  selector: 'app-card-estrutura',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatIconModule, MatTooltipModule, MatButtonModule, MatListModule, CommonModule],
  templateUrl: './card-estrutura.component.html',
  styleUrl: './card-estrutura.component.scss'
})
export class CardEstruturaComponent {
  tiles: Tile[] = [
    {text: 'EMPRESA', cols: 1, rows: 1, color: 'lightgreen', icon: 'label'},
    {text: 'SETORES', cols: 1, rows: 1, color: 'lightpink', icon: 'web'},
    {text: 'CARGOS', cols: 1, rows: 1, color: '#DDBDF1', icon: 'group'},
    {text: 'CABEÇALHO', cols: 3, rows: 1, color: 'lightblue', icon: 'build'},
    {text: 'CONTEUDO PAGINA', cols: 3, rows: 6, color: '#DDBDF1', icon: 'house'},
  ];
}
