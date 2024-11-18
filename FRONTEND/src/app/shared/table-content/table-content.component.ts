import { MaterialExportsModule } from '../../material-exports.module';
import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CpfPipe } from '../../pipes/cpf.pipe';
import { RgPipe } from '../../pipes/rg.pipe';
import { CnpjPipe } from '../../pipes/cnpj.pipe';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EmpresaInsertComponent } from '../../components/estrutura/empresa/empresa-insert/empresa-insert.component';

interface Element {
  [key: string]: any; 
}

@Component({
  selector: 'app-table-content',
  standalone: true,
  imports: [MaterialExportsModule, MatPaginatorModule, CommonModule, CpfPipe, RgPipe, CnpjPipe, MatDialogModule, EmpresaInsertComponent],
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TableContentComponent {
  @Input() displayedColumns: string[] = []; 
  @Input() data: Element[] = [];
  @Input() pageTitle: string = '';
  @Input() formFields: any[] = [];
  @Input() insertDialogComponent!: any; 
  @Input() deleteDialogComponent!: any; 
  @Input() detailDialogComponent!: any; 

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
    situacaoColaborador: 'SITUAÇÃO'
  };

  dataSource = new MatTableDataSource<Element>([]);

  constructor (private dialog: MatDialog){};

  onActionClick(element: any) {
    console.log("Ação para o item:", element);
  }
  
  ngOnInit() {
    this.dataSource.data = this.data;
  }

  // BOTÃO DE INSERIR 
  openInsertDialog(): void {
    if (this.insertDialogComponent) {
      const dialogRef = this.dialog.open(this.insertDialogComponent, {
        width: '500px',
        height: '750px',
        data: {
          title: 'CADASTRO',
          fields: this.formFields,
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('O diálogo foi fechado');
      });
    } else {
      console.error("Componente de diálogo   não especificado.");
    }
  }

  // BOTÃO DE DELETAR
  openDeleteDialog(id: number): void {
    if (id === undefined) {
      console.error('ID não fornecido para a exclusão');
      return;
    }
    const dialogRef = this.dialog.open(this.deleteDialogComponent, {
      width: '500px', 
      height: '300px',
      data: { id, title: 'CONFIRMAR EXCLUSÃO' },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Item deletado:', id);
      } else {
        console.log('A exclusão foi cancelada.');
      }
    });
  }

  // BOTÃO DE DETALHES
  openEditDialog(id: number): void {
    if (this.detailDialogComponent) {
      const dialogRef = this.dialog.open(this.detailDialogComponent, {
        width: '500px',
        height: '750px',
        data: {
          title: 'DETALHES',
          fields: this.formFields,
          id: id 
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('O diálogo foi fechado');
      });
    } else {
      console.error("Componente de diálogo não especificado.");
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}