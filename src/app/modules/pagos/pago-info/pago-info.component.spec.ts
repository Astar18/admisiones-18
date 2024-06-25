import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoInfoComponent } from './pago-info.component';

describe('PagoInfoComponent', () => {
  let component: PagoInfoComponent;
  let fixture: ComponentFixture<PagoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
