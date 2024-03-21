import { Component,NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule,FormsModule, } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { CommonModule } from '@angular/common'; // Importa CommonModule per ngClass

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterModule,MatButtonModule,MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
onSubmit() {
console.log("mimmo");
}

}
