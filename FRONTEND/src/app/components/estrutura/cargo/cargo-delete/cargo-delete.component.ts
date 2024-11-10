import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CargoService } from '../../../../services/cargo/cargo.service';
import { MaterialExportsModule } from '../../../../material-exports.module';

@Component({
  selector: 'app-cargo-delete',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './cargo-delete.component.html',
  styleUrls: ['./cargo-delete.component.scss', '../../../../../styles/delete.scss']
})
export class CargoDeleteComponent {

  constructor(
    private dialogRef: MatDialogRef<CargoDeleteComponent>,
    private cargoService: CargoService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; title: string }
  ) {}

  onDelete(): void {
    const id = this.data.id; // Acessando o id da injeção de dados
    // Chama o serviço para deletar o setor pelo ID
    this.cargoService.deleteCargo(id).subscribe({
      next: () => {
        console.log('Cargo deletado com sucesso!');
        this.dialogRef.close(true);  // Fecha o diálogo
      },
      error: (error) => {
        console.error('Erro ao deletar o cargo', error);
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close(); // Fecha o diálogo sem confirmar
  }
}
