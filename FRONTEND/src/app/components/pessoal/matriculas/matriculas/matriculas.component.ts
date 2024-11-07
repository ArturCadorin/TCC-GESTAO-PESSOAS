import { Component } from '@angular/core';
import { MatriculasRenderComponent } from '../matriculas-render/matriculas-render.component';


@Component({
  selector: 'app-matriculas',
  standalone: true,
  imports: [MatriculasRenderComponent],
  templateUrl: './matriculas.component.html',
  styleUrl: './matriculas.component.scss'
})
export class MatriculasComponent {

}
