import { Component, Inject } from '@angular/core';
import { MaterialExportsModule } from '../../../../material-exports.module';
import { Empresa } from '../../../../models/empresa';
import { EmpresaService } from '../../../../services/empresa/empresa.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CnpjPipe } from '../../../../pipes/cnpj.pipe';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-empresa-detail',
  standalone: true,
  imports: [MaterialExportsModule, CnpjPipe],
  templateUrl: './empresa-detail.component.html',
  styleUrl: '../../../../../styles/details.scss'
})

export class EmpresaDetailComponent {

  empresa: Empresa = {
    id: undefined, // Adicione este campo se necessário
    nome: '',
    cnpj: '',
    dataInicial: '',
    setores: undefined,
    cargos: undefined,
    colaboradores: undefined
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private empresaService: EmpresaService,
    private dialogRef: MatDialogRef<EmpresaDetailComponent>
  ) {}

  ngOnInit(): void {
    this.loadEmpresaData(this.data.id); // Carrega os dados ao iniciar o componente
  }

  totalSetores: number = 0;
  totalCargos: number = 0;
  totalColaboradores: number = 0;
  
  loadEmpresaData(id: number): void {
    this.empresaService.getEmpresaById(id).subscribe({
      next: (empresa) => {
        this.empresa = empresa;
        this.totalSetores = empresa.setores ? empresa.setores.length : 0;
        this.totalCargos = empresa.cargos ? empresa.cargos.length : 0;
        this.totalColaboradores = empresa.colaboradores ? empresa.colaboradores.length : 0;
      },
      error: (error) => {
        console.error('Erro ao carregar a empresa', error);
      }
    });
  }
  

  onSave() {
    this.empresaService.createEmpresa(this.empresa).subscribe({
      next: (empresaSalva) => {
        console.log('Empresa salva com sucesso!', empresaSalva);
        this.dialogRef.close(empresaSalva);
      },
      error: (error) => {
        console.error('Erro ao salvar a empresa', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}