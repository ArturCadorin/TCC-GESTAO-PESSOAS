import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorRenderComponent } from './setor-render.component';

describe('SetorRenderComponent', () => {
  let component: SetorRenderComponent;
  let fixture: ComponentFixture<SetorRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetorRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetorRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
