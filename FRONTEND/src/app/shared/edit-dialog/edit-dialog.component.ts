import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../material-exports.module';

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.scss'
})
export class EditDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close(); // Fecha o diálogo
  }
}
