import { Component } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { MatLabel } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-datos-investigacion',
  standalone: true,
  imports: [MatRadioModule, MatLabel,RouterLink ],
  templateUrl: './datos-investigacion.component.html',
  styleUrl: './datos-investigacion.component.css'
})
export class DatosInvestigacionComponent {

}
