import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveisInsertComponent } from './niveis-insert.component';

describe('NiveisInsertComponent', () => {
  let component: NiveisInsertComponent;
  let fixture: ComponentFixture<NiveisInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NiveisInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NiveisInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
