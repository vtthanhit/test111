import Login from '../pages/auth/Login/index';
import { AuthLayout } from '../layouts';
import Register from '../pages/auth/Register/index';

export const publicRoute = [
  { path: '/login', component: Login, layout: AuthLayout },
  { path: '/register', component: Register, layout: AuthLayout },
];

export const privateRoute = [];