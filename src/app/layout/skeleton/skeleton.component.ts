import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { DatosAcademicosComponent } from '../../modules/datos-academicos/datos-academicos.component';
import { DatosPersonalesComponent } from '../../modules/datos-personales/datos-personales.component';
import { DatosLaboralesComponent } from '../../modules/datos-laborales/datos-laborales.component';
import { DatosInvestigacionComponent } from '../../modules/datos-investigacion/datos-investigacion.component';
import { PostulacionComponent } from '../../modules/postulacion/postulacion.component';
import { PagoComponent } from '../../modules/pagos/pago/pago.component';
import { SeguimientoInscripcionComponent } from '../../modules/seguimiento-inscripcion/seguimiento-inscripcion.component';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [
    MatTabsModule,
    DatosPersonalesComponent,
    DatosAcademicosComponent,
    DatosLaboralesComponent,
    DatosInvestigacionComponent,
    PostulacionComponent,
    PagoComponent,
    SeguimientoInscripcionComponent,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.css'
})
export class SkeletonComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}
