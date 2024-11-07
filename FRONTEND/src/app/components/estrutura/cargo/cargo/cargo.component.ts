import { Component } from '@angular/core';
import { CargoRenderComponent } from '../cargo-render/cargo-render.component';

@Component({
  selector: 'app-cargo',
  standalone: true,
  imports: [CargoRenderComponent],
  templateUrl: './cargo.component.html',
  styleUrl: './cargo.component.scss'
})
export class CargoComponent {

}
