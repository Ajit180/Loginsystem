import { Routes } from '@angular/router';
import { Registration } from './registration/registration';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {path:'regi',component:Registration},
    {path:'login',component:Login},
    {path:'',redirectTo:'/login',pathMatch:'full'},
     {path: 'dashboard',component: Dashboard,canActivate: [authGuard]}


];
