import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private message: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.signupError
      .subscribe(
        () => this.message = "That email is already in use."
      );
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
