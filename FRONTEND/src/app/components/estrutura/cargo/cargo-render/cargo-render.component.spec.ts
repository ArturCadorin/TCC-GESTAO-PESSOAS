import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoRenderComponent } from './cargo-render.component';

describe('CargoRenderComponent', () => {
  let component: CargoRenderComponent;
  let fixture: ComponentFixture<CargoRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargoRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CargoRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
