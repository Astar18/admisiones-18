import { Component } from '@angular/core';
import { PagoTarjetaComponent } from '../pago-tarjeta/pago-tarjeta.component';
import { PagoTransferenciaComponent } from '../pago-transferencia/pago-transferencia.component';

@Component({
  selector: 'app-pago-info',
  standalone: true,
  imports: [PagoTarjetaComponent, PagoTransferenciaComponent],
  templateUrl: './pago-info.component.html',
  styleUrl: './pago-info.component.css'
})
export class PagoInfoComponent {

}
