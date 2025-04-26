import { Routes } from '@angular/router';
import {LoginComponent} from './pages/user/auth/login/login.component';
import {RegisterComponent} from './pages/user/auth/register/register.component';
import {CatalogComponent} from './pages/user/catalog/catalog/catalog.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: CatalogComponent },
];
