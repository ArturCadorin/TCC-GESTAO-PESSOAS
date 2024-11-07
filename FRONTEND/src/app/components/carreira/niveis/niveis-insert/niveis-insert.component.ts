import { Component } from '@angular/core';
import { Nives } from '../../../../models/Niveis';
import { NiveisService } from '../../../../services/niveis/niveis.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../../../material-exports.module';

@Component({
  selector: 'app-niveis-insert',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './niveis-insert.component.html',
  styleUrl: './niveis-insert.component.scss'
})
export class NiveisInsertComponent {

  niveis: Nives = {
    nome: '',
    nivel: '',
    remuneracao: 0,
    dataInicial: ''
  };

  constructor(
    private niveisService: NiveisService,
    private dialogRef: MatDialogRef<NiveisInsertComponent>
  ) {}

  onSave() {
    // Chama o serviço para salvar a nova empresa com os dados preenchidos no formulário
    this.niveisService.createNivel(this.niveis).subscribe({
      next: (nivelSalvo) => {
        console.log('Nível salvo com sucesso!', nivelSalvo);
        this.dialogRef.close(nivelSalvo); // Fecha o diálogo e retorna a empresa criada
      },
      error: (error) => {
        console.error('Erro ao salvar o nível', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close(); // Fecha o diálogo sem salvar
  }
}
