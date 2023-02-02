import {Directive, HostListener} from '@angular/core';
import {GoogleAuthProvider} from '@angular/fire/auth';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private afAuth: AngularFireAuth) {
  }

  @HostListener('click')
  onclick() {
    this.afAuth.signInWithPopup(new GoogleAuthProvider()).then((result) => {
        console.log("successful")
        console.log(result)
      },
      (error) => {
        console.error("error")
        console.error(error)
      }
    );
  }
}
