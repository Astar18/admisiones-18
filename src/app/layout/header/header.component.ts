import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
