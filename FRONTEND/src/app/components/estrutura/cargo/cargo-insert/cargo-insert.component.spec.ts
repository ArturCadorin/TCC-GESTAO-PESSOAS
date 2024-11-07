import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoInsertComponent } from './cargo-insert.component';

describe('CargoInsertComponent', () => {
  let component: CargoInsertComponent;
  let fixture: ComponentFixture<CargoInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargoInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CargoInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
