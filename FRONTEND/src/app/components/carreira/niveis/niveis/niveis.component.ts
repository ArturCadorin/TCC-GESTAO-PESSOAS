import { Component } from '@angular/core';
import { NiveisRenderComponent } from '../niveis-render/niveis-render.component';

@Component({
  selector: 'app-niveis',
  standalone: true,
  imports: [NiveisRenderComponent],
  templateUrl: './niveis.component.html',
  styleUrl: './niveis.component.scss'
})
export class NiveisComponent {

}
