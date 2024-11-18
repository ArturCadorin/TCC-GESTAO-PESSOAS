import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveisDetailComponent } from './niveis-detail.component';

describe('NiveisDetailComponent', () => {
  let component: NiveisDetailComponent;
  let fixture: ComponentFixture<NiveisDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NiveisDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NiveisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
