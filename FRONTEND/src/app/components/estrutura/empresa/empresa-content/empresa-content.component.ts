import { Component, input, Input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  cnpj: string;
  dataInicial: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Artur de Jesus Cadorin', cnpj: '11.123.123/0000-12', dataInicial: '20/11/1995'},
  {position: 2, name: 'Helium', cnpj: '11.123.123/0000-12', dataInicial: '20/11/1995'},
  {position: 3, name: 'Lithium', cnpj: '11.123.123/0000-12', dataInicial: '20/11/1995'},
  {position: 4, name: 'Beryllium', cnpj: '11.123.123/0000-12', dataInicial: '20/11/1995'},
  {position: 5, name: 'Boron', cnpj: '11.123.123/0000-12', dataInicial: '20/11/1995'},
  {position: 6, name: 'Carbon', cnpj: '11.123.123/0000-12', dataInicial: '20/11/1995'},
  {position: 7, name: 'Nitrogen', cnpj: '11.123.123/0000-12', dataInicial: '20/11/1995'},
  {position: 8, name: 'Oxygen', cnpj: '11.123.123/0000-12', dataInicial: '20/11/1995'},
  {position: 9, name: 'Fluorine', cnpj: '11.123.123/0000-12', dataInicial: '20/11/1995'},
  {position: 10, name: 'Neon', cnpj: '11.123.123/0000-12', dataInicial: '20/11/1995'},
];

@Component({
  selector: 'app-empresa-content',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './empresa-content.component.html',
  styleUrl: './empresa-content.component.scss'
})
export class EmpresaContentComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-cnpj', 'demo-dataInicial'];
  dataSource = ELEMENT_DATA;
}
