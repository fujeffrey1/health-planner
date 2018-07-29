import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;
  signupError = new Subject();
  signinError = new Subject();

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.signinUser(email, password);
        }
      )
      .catch(
        error => {
          console.log(error);
          this.signupError.next();
        }
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            )
          this.router.navigate(['/home']);
        }
      )
      .catch(
        error => {
          console.log(error);
          this.signinError.next();
        }
      );
  }

  logout() {
    firebase.auth().signOut()
    this.router.navigate(['/']);
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return true;
    // return this.token != null;
  }
}
