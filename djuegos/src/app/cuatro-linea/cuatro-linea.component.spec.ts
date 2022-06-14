import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuatroLineaComponent } from './cuatro-linea.component';

describe('CuatroLineaComponent', () => {
  let component: CuatroLineaComponent;
  let fixture: ComponentFixture<CuatroLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuatroLineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuatroLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
