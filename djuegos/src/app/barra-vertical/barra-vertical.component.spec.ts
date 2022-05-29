import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraVerticalComponent } from './barra-vertical.component';

describe('BarraVerticalComponent', () => {
  let component: BarraVerticalComponent;
  let fixture: ComponentFixture<BarraVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
