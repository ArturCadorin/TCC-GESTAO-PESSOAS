import { Component, Inject } from '@angular/core';
import { Matriculas } from '../../../../models/matriculas';
import { MatriculasService } from '../../../../services/matriculas/matriculas.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../../../material-exports.module';
import { CpfPipe } from '../../../../pipes/cpf.pipe';
import { RgPipe } from '../../../../pipes/rg.pipe';

@Component({
  selector: 'app-matriculas-detail',
  standalone: true,
  imports: [MaterialExportsModule, CpfPipe, RgPipe],
  templateUrl: './matriculas-detail.component.html',
  styleUrl: './matriculas-detail.component.scss'
})
export class MatriculasDetailComponent {

  matricula: Matriculas = {
    id: undefined,
    nome: '',
    nascimento: '',
    cpf: '',
    rg: '',
    sexo: '',
    empresa: undefined,
    dataAdmissao: '',
    dataFinal: '',
    setor: undefined,
    cargos: undefined,
    situacaoColaborador: '',
    remuneracao: undefined,
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matriculaService: MatriculasService,
    private dialogRef: MatDialogRef<MatriculasDetailComponent>
  ) {}
  
  ngOnInit(): void {
    this.loadMatriculaData(this.data.id); // Carrega os dados ao iniciar o componente
  }

  
  loadMatriculaData(id: number): void {
    this.matriculaService.getMatriculaById(id).subscribe({
      next: (matricula) => {
        this.matricula = matricula;
        console.log(matricula);
      },
      error: (error) => {
        console.error('Erro ao carregar a matricula', error);
      }
    });
  }

  onSave() {
    this.matriculaService.createMatricula(this.matricula).subscribe({
      next: (matriculaSalva) => {
        console.log('Matrícula salva com sucesso!', matriculaSalva);
        this.dialogRef.close(matriculaSalva);
      },
      error: (error) => {
        console.error('Erro ao salvar a matrícula', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
