import { Component,  } from '@angular/core';
import { EmpresaRenderComponent } from '../empresa-render/empresa-render.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpresaService } from '../../../../services/empresa/empresa.service';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [EmpresaRenderComponent, HttpClientModule],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.scss',
  providers: [EmpresaService]
})
export class EmpresaComponent{

}
