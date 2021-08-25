import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretraziComponent } from './pretrazi.component';

describe('PretraziComponent', () => {
  let component: PretraziComponent;
  let fixture: ComponentFixture<PretraziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretraziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PretraziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
