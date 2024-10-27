import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-cargo',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cargo.component.html',
  styleUrl: './cargo.component.scss'
})
export class CargoComponent {

}
