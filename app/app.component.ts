import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDlx1t9cgHRwMdb97rXz-p3bVKr690u2Fc",
      authDomain: "jeffreys-web-app.firebaseapp.com",
    })
  }

}
