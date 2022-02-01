import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewAccountComponent } from './components/create-new-account/create-new-account.component';
import { LoginPageComponent } from './login-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in'
  },
  {
    path: '', component: LoginPageComponent, children: [
      {
        path: 'sign-in', component: SignInComponent, 
      },
      {
        path: 'create-new-account', component: CreateNewAccountComponent, 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }
