import { Component,ChangeDetectionStrategy,signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
@Component({
  selector: 'app-postulacion',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatExpansionModule],
  templateUrl: './postulacion.component.html',
  styleUrl: './postulacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostulacionComponent {
  readonly panelOpenState = signal(false);
}
