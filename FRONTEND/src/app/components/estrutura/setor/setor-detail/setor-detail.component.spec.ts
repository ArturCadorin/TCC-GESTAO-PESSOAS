import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorDetailComponent } from './setor-detail.component';

describe('SetorDetailComponent', () => {
  let component: SetorDetailComponent;
  let fixture: ComponentFixture<SetorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetorDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
