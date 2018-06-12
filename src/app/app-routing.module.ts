import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUiComponent } from './components/login-ui/login-ui.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterUiComponent } from './components/register-ui/register-ui.component';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
    { 
        path:'login',
        component:LoginUiComponent
    },
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'register',
        component:RegisterUiComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }