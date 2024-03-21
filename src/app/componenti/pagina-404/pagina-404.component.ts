import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-404',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './pagina-404.component.html',
  styleUrl: './pagina-404.component.css'
})
export class Pagina404Component {

}
