import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoanComponent } from './loan/loan.component';
const routes: Routes = [
    {path: 'login' , component: LoginComponent},
    {path: 'signup' , component: SignupComponent},
    {path: 'loan' , component: LoanComponent},
    {path: '' , redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }