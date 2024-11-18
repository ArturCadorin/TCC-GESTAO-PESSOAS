import { Component, Inject } from '@angular/core';
import { Setor } from '../../../../models/setor';
import { SetorService } from '../../../../services/setor/setor.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../../../material-exports.module';

@Component({
  selector: 'app-setor-detail',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './setor-detail.component.html',
  styleUrl: '../../../../../styles/details.scss',
})

export class SetorDetailComponent {

  setor: Setor = {
    id: undefined,
    nome: '',
    descricao: '',
    dataInicial: '',
    dataFinal: '',
    cargos: undefined,
    colaboradores: undefined,
    empresa: undefined
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private setorService: SetorService,
    private dialogRef: MatDialogRef<SetorDetailComponent>
  ) {}

  ngOnInit(): void {
    this.loadSetorData(this.data.id); // Carrega os dados ao iniciar o componente
  }

  totalCargos: number = 0;
  totalColaboradores: number = 0;
  
  loadSetorData(id: number): void {
    this.setorService.getSetorById(id).subscribe({
      next: (setor) => {
        this.setor = setor;
        this.totalCargos = setor.cargos ? setor.cargos.length : 0;
        this.totalColaboradores = setor.colaboradores ? setor.colaboradores.length : 0;
      },
      error: (error) => {
        console.error('Erro ao carregar o setor', error);
      }
    });
  }

  onSave() {
    this.setorService.createSetor(this.setor).subscribe({
      next: (setorSalvo) => {
        console.log('Setor salvo com sucesso!', setorSalvo);
        this.dialogRef.close(setorSalvo); 
      },
      error: (error) => {
        console.error('Erro ao salvar o setor', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
