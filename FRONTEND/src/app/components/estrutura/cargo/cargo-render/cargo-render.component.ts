import { Component } from '@angular/core';
import { Cargo } from '../../../../models/cargo';
import { CargoService } from '../../../../services/cargo/cargo.service';
import { MatDialog } from '@angular/material/dialog';
import { TableContentComponent } from '../../../../shared/table-content/table-content.component';
import { CargoInsertComponent } from '../cargo-insert/cargo-insert.component';
import { CargoDeleteComponent } from '../cargo-delete/cargo-delete.component';
import { CargoDetailComponent } from '../cargo-detail/cargo-detail.component';

@Component({
  selector: 'app-cargo-render',
  standalone: true,
  imports: [TableContentComponent],
  templateUrl: './cargo-render.component.html',
  styleUrl: './cargo-render.component.scss'
})
export class CargoRenderComponent {

  cargos: Cargo[] = []
  pageTitle: string = "Cargos"
  insertDialogComponent = CargoInsertComponent;
  deleteDialogComponent = CargoDeleteComponent;
  detailDialogComponent = CargoDetailComponent;

  camposCargo = [
    { label: 'ID', type:'input', value: ''},
    { label: 'NOME', type: 'input', value: '' },
    { label: 'DESCRIÇÃO', type: 'textarea', value: '' }
  ]

  constructor(private cargoService: CargoService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.getCargos();
  }

  getCargos(): void{
    this.cargoService.getAll().subscribe((cargos) => {
      this.cargos = cargos;
  });
  }
}
