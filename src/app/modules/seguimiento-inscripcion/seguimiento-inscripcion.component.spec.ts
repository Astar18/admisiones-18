import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoInscripcionComponent } from './seguimiento-inscripcion.component';

describe('SeguimientoInscripcionComponent', () => {
  let component: SeguimientoInscripcionComponent;
  let fixture: ComponentFixture<SeguimientoInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguimientoInscripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguimientoInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
