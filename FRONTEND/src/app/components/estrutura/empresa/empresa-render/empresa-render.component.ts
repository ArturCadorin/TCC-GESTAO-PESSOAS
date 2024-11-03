import { Component } from '@angular/core';
import { TableContentComponent } from '../../../../shared/table-content/table-content.component';
import { Empresa } from '../../../../models/empresa';
import { EmpresaService } from '../../../../services/empresa/empresa.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-empresa-render',
  standalone: true,
  imports: [TableContentComponent, HttpClientModule],
  templateUrl: './empresa-render.component.html',
  styleUrl: './empresa-render.component.scss'
})
export class EmpresaRenderComponent {

  empresas: Empresa[] = []
  pageTitle: string = "Empresas"

  camposEmpresa = [
    { label: 'NOME', type: 'input', value: '' },
    { label: 'CNPJ', type: 'input', value: '' },
    { label: 'DATA INICIAL', type: 'date', value: '' }
  ];

  constructor(private empresaService: EmpresaService){}
  
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
