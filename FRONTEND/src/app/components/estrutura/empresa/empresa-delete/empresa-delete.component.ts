import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpresaService } from '../../../../services/empresa/empresa.service';
import { MaterialExportsModule } from '../../../../material-exports.module';

@Component({
  selector: 'app-empresa-delete',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './empresa-delete.component.html',
  styleUrls: ['./empresa-delete.component.scss', '../../../../../styles/delete.scss']
})
export class EmpresaDeleteComponent {

  constructor(
    private dialogRef: MatDialogRef<EmpresaDeleteComponent>,
    private empresaService: EmpresaService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; title: string }
  ) {}

  onDelete(): void {
    const id = this.data.id; // Acessando o id da injeção de dados
    // Chama o serviço para deletar a empresa pelo ID
    this.empresaService.deleteEmpresa(id).subscribe({
      next: () => {
        console.log('Empresa deletada com sucesso!');
        this.dialogRef.close(true);  // Fecha o diálogo
      },
      error: (error) => {
        console.error('Erro ao deletar a empresa', error);
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close(); // Fecha o diálogo sem confirmar
  }
}
