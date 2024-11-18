import { Component } from '@angular/core';
import { Nives } from '../../../../models/Niveis';
import { NiveisService } from '../../../../services/niveis/niveis.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../../../material-exports.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { Cargo } from '../../../../models/cargo';
import { CargoService } from '../../../../services/cargo/cargo.service';

@Component({
  selector: 'app-niveis-insert',
  standalone: true,
  imports: [MaterialExportsModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  templateUrl: './niveis-insert.component.html',
  styleUrls: ['./niveis-insert.component.scss', '../../../../../styles/insert.scss']
})
export class NiveisInsertComponent {

  niveis: Nives = {
    nome: '',
    nivel: '',
    remuneracao: undefined,
    dataInicial: ''
  };

  cargos: Cargo[] = [];
  
  constructor(
    private cargoService: CargoService,
    private niveisService: NiveisService,
    private dialogRef: MatDialogRef<NiveisInsertComponent>
  ) {}

  ngOnInit(): void {
    this.loadCargos();
  }

  loadCargos(): void {
    this.cargoService.getAll().subscribe({
      next: (cargos) => {
        this.cargos = cargos;
      },
      error: (error) => {
        console.error('Erro ao carregar os cargos', error);
      }
    });
  }
  
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
