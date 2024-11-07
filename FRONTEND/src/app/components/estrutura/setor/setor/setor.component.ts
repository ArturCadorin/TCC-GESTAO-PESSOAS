import { Component } from '@angular/core';
import { SetorRenderComponent } from '../setor-render/setor-render.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-setor',
  standalone: true,
  imports: [SetorRenderComponent, HttpClientModule],
  templateUrl: './setor.component.html',
  styleUrl: './setor.component.scss'
})
export class SetorComponent {

}
