import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
