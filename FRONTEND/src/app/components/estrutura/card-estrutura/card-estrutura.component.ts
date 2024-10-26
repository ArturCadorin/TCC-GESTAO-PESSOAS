import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { GridListComponent } from "../../../shared/grid-list/grid-list.component";

@Component({
  selector: 'app-card-estrutura',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatIconModule, MatTooltipModule, MatButtonModule, MatListModule, CommonModule, MatFormFieldModule, MatExpansionModule, GridListComponent],
  templateUrl: './card-estrutura.component.html',
  styleUrl: './card-estrutura.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CardEstruturaComponent {


}
