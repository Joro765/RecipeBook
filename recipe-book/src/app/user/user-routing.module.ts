import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { authActivate } from '../guards/auth.activate';
import { authDeactivate } from '../guards/auth.deactivate';

const routes: Routes = [{ path: "login", component: LoginComponent, canActivate: [authDeactivate] },
{ path: "register", component: RegisterComponent, canActivate: [authDeactivate] },
{ path: "profile", component: ProfileComponent, canActivate: [authActivate] }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
