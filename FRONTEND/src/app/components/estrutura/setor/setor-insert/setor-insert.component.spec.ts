import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorInsertComponent } from './setor-insert.component';

describe('SetorInsertComponent', () => {
  let component: SetorInsertComponent;
  let fixture: ComponentFixture<SetorInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetorInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetorInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
