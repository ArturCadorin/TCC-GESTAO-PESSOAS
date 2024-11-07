import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MaterialExportsModule } from './material-exports.module';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { CurrencyPipe } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HttpClientModule, MaterialExportsModule, NavigationComponent, NgxMaskDirective, NgxMaskPipe, CommonModule],
  templateUrl: './app.component.html',  
  styleUrl: './app.component.scss',
  providers: [CurrencyPipe]
})
export class AppComponent {
  title = 'GESTÃO DE PESSOAS';
}
