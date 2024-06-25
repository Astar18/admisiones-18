import { Routes } from '@angular/router';
import { LoginComponent } from './secutity/login/login.component';
import { RegisterComponent } from './secutity/register/register.component';

import { HomeComponent } from './layout/home/home.component';

export const routes: Routes = [
    {
      path: 'login',component: LoginComponent
    },
    {
      path: 'register',component:RegisterComponent
    },
    {
      path: 'home',component:HomeComponent
    },
    {
      path: '**', redirectTo: '/login'
    }


];
