import { Route } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';

export const authRoutes: Route[] = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
];
