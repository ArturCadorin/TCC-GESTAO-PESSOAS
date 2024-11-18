import { Component } from '@angular/core';
import { SetorService } from '../../../../services/setor/setor.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Setor } from '../../../../models/setor';
import { MaterialExportsModule } from '../../../../material-exports.module';
import { Empresa } from '../../../../models/empresa';
import { EmpresaService } from '../../../../services/empresa/empresa.service';


@Component({
  selector: 'app-setor-insert',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './setor-insert.component.html',
  styleUrls: ['./setor-insert.component.scss', '../../../../../styles/insert.scss']
})
export class SetorInsertComponent {

  setor: Setor = {
    nome: '',
    descricao: '',
    dataInicial: '',
    empresa: undefined,
  };

  empresas: Empresa[] = [];
  
  constructor(
    private empresaService: EmpresaService,
    private setorService: SetorService,
    private dialogRef: MatDialogRef<SetorInsertComponent>
  ) {}

  ngOnInit(): void {
    this.loadEmpresas();
  }

  loadEmpresas(): void {
    this.empresaService.getAll().subscribe({
      next: (empresas) => {
        this.empresas = empresas;
      },
      error: (error) => {
        console.error('Erro ao carregar as empresas', error);
      }
    });
  }

  onSave() {

    const setorComEmpresaId = {
      ...this.setor,
      empresa: this.setor.empresa,  // Aqui 'empresa' é o id da empresa
    };

    this.setorService.createSetor(setorComEmpresaId).subscribe({
      next: (setorSalvo) => {
        console.log('Setor salvo com sucesso!', setorSalvo);
        this.dialogRef.close(setorSalvo);   
      },
      error: (error) => {
        console.error('Erro ao salvar o setor', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
