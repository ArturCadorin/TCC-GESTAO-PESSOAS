import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../material-exports.module';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>) {}

  onSave() {
    // Lógica para salvar os dados
    console.log('Dados salvos!');
    // IMPLANTAR LOGICA
    this.dialogRef.close();
  }

  onCancel() {
    console.log('Operação cancelada!');
    this.dialogRef.close();
  }
}
