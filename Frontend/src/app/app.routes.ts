import { Routes } from '@angular/router';
import { Registration } from './registration/registration';
import { Login } from './login/login';

export const routes: Routes = [
    {path:'regi',component:Registration},
    {path:'login',component:Login},
    {path:'',redirectTo:'/login',pathMatch:'full'}
];
