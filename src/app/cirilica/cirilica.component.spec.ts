import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirilicaComponent } from './cirilica.component';

describe('CirilicaComponent', () => {
  let component: CirilicaComponent;
  let fixture: ComponentFixture<CirilicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirilicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CirilicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
