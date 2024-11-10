import { Component, Inject } from '@angular/core';
import { MatriculasService } from '../../../../services/matriculas/matriculas.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../../../material-exports.module';

@Component({
  selector: 'app-matriculas-delete',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './matriculas-delete.component.html',
  styleUrls: ['./matriculas-delete.component.scss', '../../../../../styles/delete.scss']
})
export class MatriculasDeleteComponent {

  constructor(
    private dialogRef: MatDialogRef<MatriculasDeleteComponent>,
    private matriculasService: MatriculasService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; title: string }
  ) {}

  onDelete(): void {
    const id = this.data.id; // Acessando o id da injeção de dados
    // Chama o serviço para deletar o setor pelo ID
    this.matriculasService.deleteMatricula(id).subscribe({
      next: () => {
        console.log('Matricula deletado com sucesso!');
        this.dialogRef.close(true);  // Fecha o diálogo
      },
      error: (error) => {
        console.error('Erro ao deletar a matricula', error);
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close(); // Fecha o diálogo sem confirmar
  }
}
