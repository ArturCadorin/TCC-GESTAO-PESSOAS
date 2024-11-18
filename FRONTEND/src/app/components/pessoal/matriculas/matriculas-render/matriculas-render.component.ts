import { Component } from '@angular/core';
import { Matriculas } from '../../../../models/matriculas';
import { MatriculasService } from '../../../../services/matriculas/matriculas.service';
import { MatDialog } from '@angular/material/dialog';
import { TableContentComponent } from '../../../../shared/table-content/table-content.component';
import { MatriculaInsertComponent } from '../matricula-insert/matricula-insert.component';
import { MatriculasDeleteComponent } from '../matriculas-delete/matriculas-delete.component';
import { MatriculasDetailComponent } from '../matriculas-detail/matriculas-detail.component';

@Component({
  selector: 'app-matriculas-render',
  standalone: true,
  imports: [TableContentComponent],
  templateUrl: './matriculas-render.component.html',
  styleUrl: './matriculas-render.component.scss'
})

export class MatriculasRenderComponent {

  matriculas: Matriculas[] = []
  pageTitle: string = "Matriculas"
  insertDialogComponent = MatriculaInsertComponent;
  deleteDialogComponent = MatriculasDeleteComponent;
  detailDialogComponent = MatriculasDetailComponent;

  camposMatricula = [
    { label: 'ID', type:'input', value: ''},
    { label: 'NOME', type: 'input', value: '' },
    { label: 'NASCIMENTO', type: 'date', value: ''},
    { label: 'CPF', type: 'input', value: ''},
    { label: 'RG', type: 'input', value: ''},
    { label: 'SEXO', type: 'select', value: ''},
    { label: 'REMUNERACAO', type: 'input', value: ''},
    { label: 'CARGO', type: 'select', value: ''},
  ]

  constructor(private matriculasService: MatriculasService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.getMatriculas();
  }

  getMatriculas(): void{
    this.matriculasService.getAll().subscribe((matriculas) => {
      this.matriculas = matriculas;
  });
  }
}
