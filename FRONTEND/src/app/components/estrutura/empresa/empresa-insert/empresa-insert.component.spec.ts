import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaInsertComponent } from './empresa-insert.component';

describe('EmpresaInsertComponent', () => {
  let component: EmpresaInsertComponent;
  let fixture: ComponentFixture<EmpresaInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresaInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpresaInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
