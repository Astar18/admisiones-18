import { Component,signal,ChangeDetectionStrategy } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule}from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

import {MatCardModule} from '@angular/material/card'
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-datos-personales',
  standalone: true,
  imports: [MatGridListModule,
    MatButtonToggleModule,MatInputModule,MatFormFieldModule,FormsModule,
    MatIconModule,MatDividerModule,MatButtonModule,MatDatepickerModule,
    MatSelectModule,MatRadioModule,MatCardModule],
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()]
})
export class DatosPersonalesComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 4 ,color:'blue'},
    {text: 'Two', cols: 1, rows: 4, color: ''},
    {text: 'Three', cols: 1, rows: 4, color: ''},
    {text: 'Four', cols: 1, rows: 4, color: ''},

  ];
  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
}
