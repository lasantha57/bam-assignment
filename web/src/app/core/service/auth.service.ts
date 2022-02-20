import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
  }

  getToken() {
    // TODO: store and access token from localstorate or somewhere
    return environment.accessToken;
  }

  isAuthenticated() {
    return this.getToken() !== null;
  }
}
