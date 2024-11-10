import { Component } from '@angular/core';
import { Matriculas } from '../../../../models/matriculas';
import { MatriculasService } from '../../../../services/matriculas/matriculas.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../../../material-exports.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-matricula-insert',
  standalone: true,
  imports: [MaterialExportsModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  templateUrl: './matricula-insert.component.html',
  styleUrls: ['./matricula-insert.component.scss']
})
export class MatriculaInsertComponent {

  matricula: Matriculas = {
    nome: '',
    nascimento: '',
    cpf: '',
    rg: '',
    sexo: '',
    dataAdmissao: '',
    remuneracao: 0,
  };

  constructor(
    private matriculaService: MatriculasService,
    private dialogRef: MatDialogRef<MatriculaInsertComponent>
  ) {}

  onSave() {
    // Chama o serviço para salvar a nova matrícula
    this.matriculaService.createMatricula(this.matricula).subscribe({
      next: (matriculaSalva) => {
        console.log('Matrícula salva com sucesso!', matriculaSalva);
        this.dialogRef.close(matriculaSalva); // Fecha o diálogo e retorna a matrícula criada
      },
      error: (error) => {
        console.error('Erro ao salvar a matrícula', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close(); // Fecha o diálogo sem salvar
  }
}
