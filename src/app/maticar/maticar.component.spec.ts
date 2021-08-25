import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaticarComponent } from './maticar.component';

describe('MaticarComponent', () => {
  let component: MaticarComponent;
  let fixture: ComponentFixture<MaticarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaticarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaticarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
