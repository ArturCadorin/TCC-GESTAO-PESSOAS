import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SetorService } from '../../../../services/setor/setor.service';
import { MaterialExportsModule } from '../../../../material-exports.module';

@Component({
  selector: 'app-setor-delete',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './setor-delete.component.html',
  styleUrls: ['./setor-delete.component.scss', '../../../../../styles/delete.scss']
})
export class SetorDeleteComponent {

  constructor(
    private dialogRef: MatDialogRef<SetorDeleteComponent>,
    private setorService: SetorService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; title: string }
  ) {}

  onDelete(): void {
    const id = this.data.id; // Acessando o id da injeção de dados
    // Chama o serviço para deletar o setor pelo ID
    this.setorService.deleteSetor(id).subscribe({
      next: () => {
        console.log('Setor deletado com sucesso!');
        this.dialogRef.close(true);  // Fecha o diálogo
      },
      error: (error) => {
        console.error('Erro ao deletar o setor', error);
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close(); // Fecha o diálogo sem confirmar
  }
}
