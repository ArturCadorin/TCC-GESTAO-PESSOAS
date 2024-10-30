import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { TableContentComponent } from '../table-content/table-content.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule, TableContentComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  pageTitle: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.getRouteData(this.activatedRoute))
      )
      .subscribe(title => this.pageTitle = title);
  }
  private getRouteData(route: ActivatedRoute): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data['title'] || 'Título Padrão';
  }
}
