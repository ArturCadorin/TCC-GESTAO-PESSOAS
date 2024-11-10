import { Component } from '@angular/core';
import { TableContentComponent } from '../../../../shared/table-content/table-content.component';
import { Nives } from '../../../../models/Niveis';
import { MatLabel } from '@angular/material/form-field';
import { NiveisService } from '../../../../services/niveis/niveis.service';
import { MatDialog } from '@angular/material/dialog';
import { InsertDialogComponent } from '../../../../shared/insert-dialog/insert-dialog.component';
import { NiveisInsertComponent } from '../niveis-insert/niveis-insert.component';
import { NiveisDeleteComponent } from '../niveis-delete/niveis-delete.component';


@Component({
  selector: 'app-niveis-render',
  standalone: true,
  imports: [TableContentComponent],
  templateUrl: './niveis-render.component.html',
  styleUrl: './niveis-render.component.scss'
})
export class NiveisRenderComponent {

  niveis: Nives[] = []
  pageTitle: string = "Níveis"
  insertDialogComponent = NiveisInsertComponent;
  deleteDialogComponent = NiveisDeleteComponent;

  camposNiveis = [
    {label: 'ID', type: 'input', value: ''},
    {label: 'NOME', type: 'input', value: ''},
    {label: 'NÍVEL', type: 'select', value: ''},
    {label: 'REMUNERAÇÃO', type: 'input', value: ''},
    {label: 'CARGOS', type: 'select', value: ''}
  ]

  constructor(private niveisService: NiveisService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.getNiveis();
  }

  getNiveis(): void{
    this.niveisService.getAll().subscribe((niveis) => {
      this.niveis = niveis;
  });
  }
}
