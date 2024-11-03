import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaRenderComponent } from './empresa-render.component';

describe('EmpresaRenderComponent', () => {
  let component: EmpresaRenderComponent;
  let fixture: ComponentFixture<EmpresaRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresaRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpresaRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
