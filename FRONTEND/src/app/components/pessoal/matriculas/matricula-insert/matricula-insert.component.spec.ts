import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaInsertComponent } from './matricula-insert.component';

describe('MatriculaInsertComponent', () => {
  let component: MatriculaInsertComponent;
  let fixture: ComponentFixture<MatriculaInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculaInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatriculaInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
