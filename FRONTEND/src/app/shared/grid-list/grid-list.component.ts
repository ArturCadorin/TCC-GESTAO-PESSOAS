import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

// Layout do gridlist
export interface Tile {
  text: string;
  cols: number;
  rows: number;
  icon: string;
}

@Component({
  selector: 'app-grid-list',
  standalone: true,
  imports: [MatGridListModule, MatIconModule, MatFormFieldModule, CommonModule],
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
})
export class GridListComponent {
  
  // Layout PADRÃO do gridlist. 
  arrtiles: Tile[] = [
    {text: 'HEADER', cols: 4, rows: 1, icon: 'label'},
    {text: 'PESQUISA', cols: 2, rows: 1, icon: 'web'},
    {text: 'FILTROS', cols: 2, rows: 1,  icon: 'group'},
    {text: 'CONTENT-PRINCIPAL', cols: 4, rows: 6, icon: 'group'},
  ];
  @Input() tiles: Tile[] = [];

  // ******* Atribuindo titulo do grid-list dinamicamente *****

  title: string = "Título da página";
  buttonTitlesForEstrutura: string[] = ["EMPRESA", "SETORES", "CARGOS"];
  buttonTitlesForPessoas: string[] = ["PESSOA FIS.  ", "MATRÍCULAS", "USUARIOS"]; // Botões específicos para "pessoas"
  buttonTitlesForCarreiras: string[] = ["PLANOS", "NÍVEIS"]; // Botões específicos para "carreiras"
  showButtons: string[] = []; // Array para armazenar os títulos dos botões a serem exibidos

  constructor(private route: ActivatedRoute) {}

  setTitleBasedOnRoute(route: string) {
    if (route === "estrutura") {
      this.title = "Estrutura da Empresa";
      this.showButtons = this.buttonTitlesForEstrutura; // Define os botões para "estrutura"
    } else if (route === "pessoas") {
      this.title = "Gestão de Pessoas";
      this.showButtons = this.buttonTitlesForPessoas; // Define os botões para "pessoas"
    } else if (route === "carreiras") {
      this.title = "Desenvolvimento de Carreiras";
      this.showButtons = this.buttonTitlesForCarreiras; // Define os botões para "carreiras"
    } else {
      this.title = "Página Desconhecida";
      this.showButtons = []; // Nenhum botão para rotas desconhecidas
    }
  }

  ngOnInit(): void {
    this.tiles = this.arrtiles
    this.route.url.subscribe(url => {
      const currentPath = url[0]?.path || '';
      this.setTitleBasedOnRoute(currentPath);
    });
  }
}