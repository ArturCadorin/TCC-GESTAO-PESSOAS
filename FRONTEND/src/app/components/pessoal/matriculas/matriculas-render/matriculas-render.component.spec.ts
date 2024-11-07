import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasRenderComponent } from './matriculas-render.component';

describe('MatriculasRenderComponent', () => {
  let component: MatriculasRenderComponent;
  let fixture: ComponentFixture<MatriculasRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculasRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatriculasRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
