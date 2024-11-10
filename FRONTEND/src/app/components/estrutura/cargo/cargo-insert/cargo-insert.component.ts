import { Component } from '@angular/core';
import { Cargo } from '../../../../models/cargo';
import { CargoService } from '../../../../services/cargo/cargo.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../../../material-exports.module';

@Component({
  selector: 'app-cargo-insert',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './cargo-insert.component.html',
  styleUrls: ['./cargo-insert.component.scss', '../../../../../styles/insert.scss']
})
export class CargoInsertComponent {

  cargo: Cargo = {
    nome: '',
    descricao: '',
    dataInicial: ''
  };

  constructor(
    private cargoService: CargoService,
    private dialogRef: MatDialogRef<CargoInsertComponent>
  ) {}

  onSave() {
    // Chama o serviço para salvar o novo cargo com os dados preenchidos no formulário
    this.cargoService.createCargo(this.cargo).subscribe({
      next: (cargoSalvo) => {
        console.log('Cargo salvo com sucesso!', cargoSalvo);
        this.dialogRef.close(cargoSalvo); // Fecha o diálogo e retorna o cargo criado
      },
      error: (error) => {
        console.error('Erro ao salvar o cargo', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close(); // Fecha o diálogo sem salvar
  }
}
