import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveisRenderComponent } from './niveis-render.component';

describe('NiveisRenderComponent', () => {
  let component: NiveisRenderComponent;
  let fixture: ComponentFixture<NiveisRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NiveisRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NiveisRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
