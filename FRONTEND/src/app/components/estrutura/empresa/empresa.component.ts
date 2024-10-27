import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.scss'
})
export class EmpresaComponent {

}
