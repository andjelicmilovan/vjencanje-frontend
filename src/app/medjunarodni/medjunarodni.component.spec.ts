import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedjunarodniComponent } from './medjunarodni.component';

describe('MedjunarodniComponent', () => {
  let component: MedjunarodniComponent;
  let fixture: ComponentFixture<MedjunarodniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedjunarodniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedjunarodniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
