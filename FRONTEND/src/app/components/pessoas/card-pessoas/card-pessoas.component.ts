import { Component } from '@angular/core';
import { GridListComponent } from '../../../shared/grid-list/grid-list.component'

@Component({
  selector: 'app-card-pessoas',
  standalone: true,
  imports: [ GridListComponent],
  templateUrl: './card-pessoas.component.html',
  styleUrl: './card-pessoas.component.scss'
})

export class CardPessoasComponent {

}
