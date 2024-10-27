import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { EmpresaContentComponent } from '../../components/estrutura/empresa/empresa-content/empresa-content.component';
import { SetorContentComponent } from '../../components/estrutura/setor/setor-content/setor-content.component';
import { CargoContentComponent } from '../../components/estrutura/cargo/cargo-content/cargo-content.component';

import { ActivatedRoute } from '@angular/router';
import { PessoaFisicaContentComponent } from '../../components/pessoas/pessoa-fisica/pessoa-fisica-content/pessoa-fisica-content.component';
import { MatriculasContentComponent } from '../../components/pessoas/matriculas/matriculas-content/matriculas-content.component';
import { UsuariosContentComponent } from '../../components/pessoas/usuarios/usuarios-content/usuarios-content.component';
import { PlanosContentComponent } from '../../components/carreiras/planos/planos-content/planos-content.component';
import { NiveisContentComponent } from '../../components/carreiras/niveis/niveis-content/niveis-content.component';
import { EmpresaDetailsComponent } from '../../components/estrutura/empresa/empresa-details/empresa-details.component';
import { SetorDetailsComponent } from '../../components/estrutura/setor/setor-details/setor-details.component';
import { CargoDetailsComponent } from '../../components/estrutura/cargo/cargo-details/cargo-details.component';
import { PessoaFisicaDetailsComponent } from '../../components/pessoas/pessoa-fisica/pessoa-fisica-details/pessoa-fisica-details.component';
import { MatriculasDetailsComponent } from '../../components/pessoas/matriculas/matriculas-details/matriculas-details.component';
import { UsuariosDetailsComponent } from '../../components/pessoas/usuarios/usuarios-details/usuarios-details.component';
import { PlanosDetailsComponent } from '../../components/carreiras/planos/planos-details/planos-details.component';
import { NveisDetailsComponent } from '../../components/carreiras/niveis/nveis-details/nveis-details.component';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, FormsModule, SetorContentComponent, CargoContentComponent, CommonModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CardComponent {

  tiles: Tile[] = [
    {text: 'HEADER', cols: 2, rows: 1},
    {text: 'DETAILS', cols: 1, rows: 7},
    {text: 'CONTENT', cols: 2, rows: 6},
  ];

  activeComponentContent: Type<any> | null = null;
  activeComponentDetails: Type<any> | null = null;

  // Defina o componente com base na rota ou lógica de seleção
  setComponent(route: string) {
    switch(route) {
      case 'empresas':
        this.activeComponentContent = EmpresaContentComponent;
        this.activeComponentDetails = EmpresaDetailsComponent;
        break;
      case 'setores':
        this.activeComponentContent = SetorContentComponent;
        this.activeComponentDetails = SetorDetailsComponent;
        break;
      case 'cargos':
        this.activeComponentContent = CargoContentComponent;
        this.activeComponentDetails = CargoDetailsComponent;
        break;
      case 'pessoa-fisica':
        this.activeComponentContent = PessoaFisicaContentComponent;
        this.activeComponentDetails = PessoaFisicaDetailsComponent;
        break;
      case 'matriculas':
        this.activeComponentContent = MatriculasContentComponent;
        this.activeComponentDetails = MatriculasDetailsComponent;
        break;
      case 'usuarios':
        this.activeComponentContent = UsuariosContentComponent;
        this.activeComponentDetails = UsuariosDetailsComponent;
        break;
      case 'plano-carreira':
        this.activeComponentContent = PlanosContentComponent;
        this.activeComponentDetails = PlanosDetailsComponent;
        break;
      case 'niveis':
        this.activeComponentContent = NiveisContentComponent;
        this.activeComponentDetails = NveisDetailsComponent;
        break;
      default:
        this.activeComponentContent = null; // Componente padrão ou nulo
        break;
    }
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(url => {
      const routePath = url[0].path;
      this.setComponent(routePath);
    });
  }
}
