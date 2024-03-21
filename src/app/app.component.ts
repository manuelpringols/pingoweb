import { Component,NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule,NgForm,FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule per ngClass
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,CommonModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
onSubmit() {
console.log("addios");
}
  title = 'web-app';

  email!:string;
}
