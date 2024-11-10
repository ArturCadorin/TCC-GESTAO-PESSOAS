import { Component } from '@angular/core';
import { MatDialogRef  } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../../../material-exports.module';
import { Empresa } from '../../../../models/empresa';
import { EmpresaService } from '../../../../services/empresa/empresa.service';
import { provideNgxMask, NgxMaskPipe, NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-empresa-insert',
  standalone: true,
  imports: [MaterialExportsModule, NgxMaskPipe, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './empresa-insert.component.html',
  styleUrls: ['./empresa-insert.component.scss', '../../../../../styles/insert.scss']
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
