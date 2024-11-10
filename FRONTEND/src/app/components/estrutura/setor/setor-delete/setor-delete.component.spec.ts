import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorDeleteComponent } from './setor-delete.component';

describe('SetorDeleteComponent', () => {
  let component: SetorDeleteComponent;
  let fixture: ComponentFixture<SetorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetorDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
