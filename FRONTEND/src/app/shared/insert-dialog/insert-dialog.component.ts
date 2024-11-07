import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { MaterialExportsModule } from '../../material-exports.module';
import { Empresa } from '../../models/empresa';
import { EmpresaService } from '../../services/empresa/empresa.service';

@Component({
  selector: 'app-insert-dialog',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './insert-dialog.component.html',
  styleUrl: './insert-dialog.component.scss'
})
export class InsertDialogComponent {
  
  constructor(public dialogRef: MatDialogRef<InsertDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private empresaService: EmpresaService) {}

  onSave() {
    // Lógica para salvar os dados
    console.log('Dados salvos!');
      // Cria um objeto Empresa com os dados do formulário
    const novaEmpresa: Empresa = {
      nome: this.data.fields[0].value, // Presumindo que o nome está na primeira posição
      cnpj: this.data.fields[1].value,  // Presumindo que o CNPJ está na segunda posição
      dataInicial: this.data.fields[2].value // Presumindo que a data inicial está na terceira posição
    };
    // Chama o serviço para salvar a nova empresa
    this.empresaService.createEmpresa(novaEmpresa).subscribe({
      next: (empresa) => {
        console.log('Empresa salva com sucesso!', empresa);
        this.dialogRef.close(empresa); // Fecha o diálogo e retorna a empresa criada
      },
      error: (error) => {
        console.error('Erro ao salvar a empresa', error);
      }
    });
  }

  onCancel() {
    console.log('Operação cancelada!');
    this.dialogRef.close();
  }

  
}
