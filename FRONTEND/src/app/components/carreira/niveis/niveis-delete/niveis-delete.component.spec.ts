import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveisDeleteComponent } from './niveis-delete.component';

describe('NiveisDeleteComponent', () => {
  let component: NiveisDeleteComponent;
  let fixture: ComponentFixture<NiveisDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NiveisDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NiveisDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
