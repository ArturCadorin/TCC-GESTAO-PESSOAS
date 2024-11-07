import { Component } from '@angular/core';
import { Setor } from '../../../../models/setor';
import { HttpClientModule } from '@angular/common/http';
import { SetorService } from '../../../../services/setor/setor.service';
import { MatDialog } from '@angular/material/dialog';
import { InsertDialogComponent } from '../../../../shared/insert-dialog/insert-dialog.component';
import { TableContentComponent } from '../../../../shared/table-content/table-content.component';
import { SetorInsertComponent } from '../setor-insert/setor-insert.component';

@Component({
  selector: 'app-setor-render',
  standalone: true,
  imports: [HttpClientModule, TableContentComponent],
  templateUrl: './setor-render.component.html',
  styleUrl: './setor-render.component.scss'
})
export class SetorRenderComponent {

  setores: Setor[] = []
  pageTitle: string = "Setores"
  dialogComponent = SetorInsertComponent;

  camposSetor = [
    { label: 'ID', type:'input', value: ''},
    { label: 'NOME', type: 'input', value: '' },
    { label: 'DESCRIÇÃO', type: 'textarea', value: '' }
  ]

  constructor(private setorService: SetorService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.getSetores();
  }

  getSetores(): void{
    this.setorService.getAll().subscribe((setores) => {
      this.setores = setores;
    });
  }
}
