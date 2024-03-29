import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn = false;
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 500);
      }
    );
    return promise;
  }
  login() {
    this.loggedIn = true;
  }
  logOut() {
    this.loggedIn = false;
  }

}
