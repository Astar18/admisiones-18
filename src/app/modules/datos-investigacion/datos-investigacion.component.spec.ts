import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosInvestigacionComponent } from './datos-investigacion.component';

describe('DatosInvestigacionComponent', () => {
  let component: DatosInvestigacionComponent;
  let fixture: ComponentFixture<DatosInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosInvestigacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
