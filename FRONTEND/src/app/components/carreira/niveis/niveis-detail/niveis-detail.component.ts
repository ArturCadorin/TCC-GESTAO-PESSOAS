import { Component, Inject } from '@angular/core';
import { Nives } from '../../../../models/Niveis';
import { NiveisService } from '../../../../services/niveis/niveis.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../../../material-exports.module';

@Component({
  selector: 'app-niveis-detail',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './niveis-detail.component.html',
  styleUrl: '../../../../../styles/details.scss'
})
export class NiveisDetailComponent {

  niveis: Nives = {
    id: undefined,
    nome: '',
    nivel: '',
    remuneracao: undefined,
    dataInicial: '',
    dataFinal: '',
    cargos: undefined
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private niveisService: NiveisService,
    private dialogRef: MatDialogRef<NiveisDetailComponent>
  ) {}

  ngOnInit(): void {
    this.loadSetorData(this.data.id); // Carrega os dados ao iniciar o componente
  }

  totalCargos: number = 0;
  
  loadSetorData(id: number): void {
    this.niveisService.getNivelById(id).subscribe({
      next: (niveis) => {
        this.niveis = niveis;
        this.totalCargos = niveis.cargos ? niveis.cargos.length : 0;
      },
      error: (error) => {
        console.error('Erro ao carregar o nível', error);
      }
    });
  }

  onSave() {
    this.niveisService.createNivel(this.niveis).subscribe({
      next: (nivelSalvo) => {
        console.log('Nível salvo com sucesso!', nivelSalvo);
        this.dialogRef.close(nivelSalvo); 
      },
      error: (error) => {
        console.error('Erro ao salvar o nível', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
