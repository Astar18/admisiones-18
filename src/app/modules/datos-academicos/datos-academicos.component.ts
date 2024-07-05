import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-datos-academicos',
  standalone: true,
  imports: [MatGridListModule,MatButtonToggleModule,MatButtonModule,MatIconModule],
  templateUrl: './datos-academicos.component.html',
  styleUrl: './datos-academicos.component.css'
})
export class DatosAcademicosComponent {


  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 4 ,color:'blue'},
    {text: 'Two', cols: 1, rows: 4, color: ''},
    {text: 'Three', cols: 1, rows: 4, color: ''},
    {text: 'Four', cols: 1, rows: 4, color: ''},

  ];
}
