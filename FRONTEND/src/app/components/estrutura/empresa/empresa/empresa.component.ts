import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { MaterialModule } from '../../../../shared/material.module';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [CardComponent, MaterialModule],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.scss'
})
export class EmpresaComponent {

}
