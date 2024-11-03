import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../material-exports.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-insert-dialog',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './insert-dialog.component.html',
  styleUrl: './insert-dialog.component.scss'
})
export class InsertDialogComponent {
  
  constructor(public dialogRef: MatDialogRef<InsertDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

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
