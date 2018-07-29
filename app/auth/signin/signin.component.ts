import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private message: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.signinError
      .subscribe(
        () => this.message = "Incorrect email or password."
      );
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
