import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';

export const routes: Routes = [{ path: '', component: LoginComponent, children: [{ path: '', redirectTo: 'sign-in', pathMatch: 'full' }, { path: 'sign-in', component: SignInComponent, data: { text: 'Sign In' } }, { path: 'create-account', component: CreateAccountComponent, data: { text: 'Create Account' } }] }];
