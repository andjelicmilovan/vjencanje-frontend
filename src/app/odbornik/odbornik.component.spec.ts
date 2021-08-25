import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdbornikComponent } from './odbornik.component';

describe('OdbornikComponent', () => {
  let component: OdbornikComponent;
  let fixture: ComponentFixture<OdbornikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdbornikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdbornikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
