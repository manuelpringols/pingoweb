import { Routes } from '@angular/router';
import { MapComponent } from './componenti/map/map.component';
import { LoginComponent } from './componenti/login/login.component';
import { Pagina404Component } from './componenti/pagina-404/pagina-404.component';

export const routes: Routes = [
    {path:"map",component:MapComponent},
    {path:"",component:LoginComponent},
    {path:"404",component: Pagina404Component},
    {path:"**", redirectTo:"/404"}



];
