import { Component, Inject } from '@angular/core';
import { Cargo } from '../../../../models/cargo';
import { MaterialExportsModule } from '../../../../material-exports.module';
import { CargoService } from '../../../../services/cargo/cargo.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cargo-detail',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './cargo-detail.component.html',
  styleUrl: '../../../../../styles/details.scss'
})
export class CargoDetailComponent {

  cargo: Cargo = {
    id: undefined,
    nome: '',
    descricao: '',
    dataInicial: '',
    dataFinal: '',
    setor: undefined,
    colaboradores: undefined,
    empresa: undefined
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cargoService: CargoService,
    private dialogRef: MatDialogRef<CargoDetailComponent>
  ) {}

  ngOnInit(): void {
    this.loadCargoData(this.data.id); // Carrega os dados ao iniciar o componente
  }

  //totalSetor: number = 0;
  totalColaboradores: number = 0;
  
  loadCargoData(id: number): void {
    this.cargoService.getCargoById(id).subscribe({
      next: (cargo) => {
        this.cargo = cargo;
        //this.totalSetor = cargo.setor ? cargo.setor.length : 0;
        this.totalColaboradores = cargo.colaboradores ? cargo.colaboradores.length : 0;
      },
      error: (error) => {
        console.error('Erro ao carregar o setor', error);
      }
    });
  }

  onSave() {
    this.cargoService.createCargo(this.cargo).subscribe({
      next: (cargoSalvo) => {
        console.log('Cargo salvo com sucesso!', cargoSalvo);
        this.dialogRef.close(cargoSalvo);
      },
      error: (error) => {
        console.error('Erro ao salvar o cargo', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
