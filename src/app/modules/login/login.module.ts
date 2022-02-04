import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateNewAccountComponent } from './components/create-new-account/create-new-account.component';
import { LoginPageRoutingModule } from './login-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignInComponent,
    CreateNewAccountComponent,
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class LoginPageModule { }
