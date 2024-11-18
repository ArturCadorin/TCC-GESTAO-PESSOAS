import { Component } from '@angular/core';
import { Cargo } from '../../../../models/cargo';
import { CargoService } from '../../../../services/cargo/cargo.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../../../material-exports.module';
import { Setor } from '../../../../models/setor';
import { Empresa } from '../../../../models/empresa';
import { EmpresaService } from '../../../../services/empresa/empresa.service';
import { SetorService } from '../../../../services/setor/setor.service';

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
    dataInicial: '',
    empresa: undefined,
    setor: undefined,
  };

  empresas: Empresa[] = [];
  setores: Setor[] = [];

  constructor(
    private empresaService: EmpresaService,
    private setorService: SetorService,
    private cargoService: CargoService,
    private dialogRef: MatDialogRef<CargoInsertComponent>
  ) {}

  ngOnInit(): void {
    this.loadEmpresas();
    this.loadSetores();
  }

  loadEmpresas(): void {
    this.empresaService.getAll().subscribe({
      next: (empresas) => {
        this.empresas = empresas;
      },
      error: (error) => {
        console.error('Erro ao carregar as empresas', error);
      }
    });
  }

  loadSetores(): void {
    this.setorService.getAll().subscribe({
      next: (setores) => {
        this.setores = setores;
      },
      error: (error) => {
        console.error('Erro ao carregar os setores', error);
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
