import { Component } from '@angular/core';
import { MatDialogRef  } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../../../material-exports.module';
import { Empresa } from '../../../../models/empresa';
import { EmpresaService } from '../../../../services/empresa/empresa.service';

@Component({
  selector: 'app-empresa-insert',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './empresa-insert.component.html',
  styleUrl: './empresa-insert.component.scss'
})
export class EmpresaInsertComponent {

  empresa: Empresa = {
    nome: '',
    cnpj: '',
    dataInicial: ''
  };

  constructor(
    private empresaService: EmpresaService,
    private dialogRef: MatDialogRef<EmpresaInsertComponent>
  ) {}

  onSave() {
    // Chama o serviço para salvar a nova empresa com os dados preenchidos no formulário
    this.empresaService.createEmpresa(this.empresa).subscribe({
      next: (empresaSalva) => {
        console.log('Empresa salva com sucesso!', empresaSalva);
        this.dialogRef.close(empresaSalva); // Fecha o diálogo e retorna a empresa criada
      },
      error: (error) => {
        console.error('Erro ao salvar a empresa', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close(); // Fecha o diálogo sem salvar
  }
}
