import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasDetailComponent } from './matriculas-detail.component';

describe('MatriculasDetailComponent', () => {
  let component: MatriculasDetailComponent;
  let fixture: ComponentFixture<MatriculasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculasDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatriculasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
