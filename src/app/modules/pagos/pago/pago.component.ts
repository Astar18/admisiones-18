import { Component } from '@angular/core';
import { PagoInfoComponent } from '../pago-info/pago-info.component';
import { PagoTarjetaComponent } from '../pago-tarjeta/pago-tarjeta.component';
import { PagoTransferenciaComponent } from '../pago-transferencia/pago-transferencia.component';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [PagoInfoComponent, PagoTarjetaComponent, PagoTransferenciaComponent],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent {

}
