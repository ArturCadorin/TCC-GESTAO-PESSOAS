import { Component, Inject } from '@angular/core';
import { NiveisService } from '../../../../services/niveis/niveis.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../../../material-exports.module';

@Component({
  selector: 'app-niveis-delete',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './niveis-delete.component.html',
  styleUrls: ['./niveis-delete.component.scss', '../../../../../styles/delete.scss']
})
export class NiveisDeleteComponent {

  constructor(
    private dialogRef: MatDialogRef<NiveisDeleteComponent>,
    private niveisService: NiveisService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; title: string }
  ) {}

  onDelete(): void {
    const id = this.data.id; // Acessando o id da injeção de dados
    // Chama o serviço para deletar o setor pelo ID
    this.niveisService.deleteNivel(id).subscribe({
      next: () => {
        console.log('Nível deletado com sucesso!');
        this.dialogRef.close(true);  // Fecha o diálogo
      },
      error: (error) => {
        console.error('Erro ao deletar o nível', error);
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close(); // Fecha o diálogo sem confirmar
  }
}
