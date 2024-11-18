import { Component } from '@angular/core';
import { Matriculas } from '../../../../models/matriculas';
import { MatriculasService } from '../../../../services/matriculas/matriculas.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../../../material-exports.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { EmpresaService } from '../../../../services/empresa/empresa.service';
import { SetorService } from '../../../../services/setor/setor.service';
import { CargoService } from '../../../../services/cargo/cargo.service';
import { Empresa } from '../../../../models/empresa';
import { Setor } from '../../../../models/setor';
import { Cargo } from '../../../../models/cargo';

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
    remuneracao: undefined,
  };

  empresas: Empresa[] = [];
  setores: Setor[] = [];
  cargos: Cargo[] = [];

  constructor(
    private empresaService: EmpresaService,
    private setorService: SetorService,
    private cargoService: CargoService,
    private matriculaService: MatriculasService,
    private dialogRef: MatDialogRef<MatriculaInsertComponent>
  ) {}

  ngOnInit(): void {
    this.loadEmpresas();
    this.loadSetores();
    this.loadCargos();
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
