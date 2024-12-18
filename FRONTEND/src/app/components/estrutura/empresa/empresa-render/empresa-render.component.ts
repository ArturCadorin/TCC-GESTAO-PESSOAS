import { Component } from '@angular/core';
import { TableContentComponent } from '../../../../shared/table-content/table-content.component';
import { Empresa } from '../../../../models/empresa';
import { EmpresaService } from '../../../../services/empresa/empresa.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { EmpresaInsertComponent } from '../empresa-insert/empresa-insert.component';
import { EmpresaDeleteComponent } from '../empresa-delete/empresa-delete.component';
import { EmpresaDetailComponent } from '../empresa-detail/empresa-detail.component';

@Component({
  selector: 'app-empresa-render',
  standalone: true,
  imports: [TableContentComponent, HttpClientModule, EmpresaDetailComponent],
  templateUrl: './empresa-render.component.html',
  styleUrl: './empresa-render.component.scss'
})

export class EmpresaRenderComponent {

  empresas: Empresa[] = []
  pageTitle: string = "Empresas"
  insertDialogComponent = EmpresaInsertComponent; 
  deleteDialogComponent = EmpresaDeleteComponent;
  detailDialogComponent = EmpresaDetailComponent;

  camposEmpresa = [
    { name: 'nome', label: 'Nome', type: 'input', required: true },
    { name: 'cnpj', label: 'CNPJ', type: 'input', required: true, pattern: /^\d{14}$/ },
    { name: 'dataInicial', label: 'Data Inicial', type: 'date', required: true },
  ];

  constructor(private empresaService: EmpresaService, private dialog: MatDialog){}
  
  ngOnInit(): void {
    this.getEmpresas();
  }

  // Retorna todas as empresas
  getEmpresas(): void{
    this.empresaService.getAll().subscribe((empresas) => {
      this.empresas = empresas;
  });
  }
}