import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {

}
