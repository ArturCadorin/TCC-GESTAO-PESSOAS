import { Component } from '@angular/core';
import { SetorService } from '../../../../services/setor/setor.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Setor } from '../../../../models/setor';
import { MaterialExportsModule } from '../../../../material-exports.module';


@Component({
  selector: 'app-setor-insert',
  standalone: true,
  imports: [MaterialExportsModule],
  templateUrl: './setor-insert.component.html',
  styleUrl: './setor-insert.component.scss'
})
export class SetorInsertComponent {

  setor: Setor = {
    nome: '',
    descricao: '',
    dataInicial: ''
  };

  constructor(
    private setorService: SetorService,
    private dialogRef: MatDialogRef<SetorInsertComponent>
  ) {}

  onSave() {
    // Chama o serviço para salvar a nova empresa com os dados preenchidos no formulário
    this.setorService.createSetor(this.setor).subscribe({
      next: (setorSalvo) => {
        console.log('Setor salvo com sucesso!', setorSalvo);
        this.dialogRef.close(setorSalvo); // Fecha o diálogo e retorna a empresa criada
      },
      error: (error) => {
        console.error('Erro ao salvar o setor', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close(); // Fecha o diálogo sem salvar
  }
}
