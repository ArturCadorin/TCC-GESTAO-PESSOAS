import { MaterialExportsModule } from '../../material-exports.module';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CpfPipe } from '../../pipes/cpf.pipe';
import { RgPipe } from '../../pipes/rg.pipe';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InsertDialogComponent } from '../insert-dialog/insert-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';


interface Element {
  [key: string]: any; // Usando index signature para permitir chaves dinâmicas
}

@Component({
  selector: 'app-table-content',
  standalone: true,
  imports: [MaterialExportsModule, MatPaginatorModule, CommonModule, CpfPipe, RgPipe, MatDialogModule],
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableContentComponent {
  @Input() displayedColumns: string[] = []; // Colunas a serem exibidas
  @Input() data: Element[] = []; // Dados a serem exibidos
  @Input() pageTitle: string = '';
  @Input() formFields: any[] = [];

  columnLabels: { [key: string]: string } = {
    remuneracao: 'REMUNERAÇÃO',
    cpf: 'CPF',
    rg: 'RG',
    dataInicial: 'DATA INICIAL',
    dataAdmissao: 'DATA DE ADMISSÃO',
    dataFinal: 'DATA FINAL',
    nivel: 'NÍVEL',
    nascimento: 'DATA DE NASCIMENTO',
    planoCarreira: 'PLANO DE CARREIRA',
    descricao: 'DESCRIÇÃO',
    actions: 'AÇÕES',
  };

  dataSource = new MatTableDataSource<Element>([]); // Data source inicializado com dados vazios

  constructor (private dialog: MatDialog){};

  onActionClick(element: any) {
    console.log("Ação para o item:", element);
    // Adicione aqui a lógica da ação desejada (ex: excluir, editar, etc.)
  }
  
  ngOnInit() {
    this.dataSource.data = this.data; // Atribuindo os dados recebidos
  }

  // Inserir novo cadastro
  openInsertDialog(): void {
    const dialogRef = this.dialog.open(InsertDialogComponent, {
      width: '500px',
      height: '600px',
      data: {
        title: 'CADASTRO', 
        fields: this.formFields,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O diálogo foi fechado');
      // Aqui você pode lidar com o resultado se necessário
    });
  }

  // Editando cadastro
  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px', // Defina a largura do diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O diálogo foi fechado');
      // Aqui você pode lidar com o resultado se necessário
    });
  }

    // Editando cadastro
    openDeleteDialog(): void {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '400px', // Defina a largura do diálogo
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('O diálogo foi fechado');
        // Aqui você pode lidar com o resultado se necessário
      });
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}