import { Injectable } from '@angular/core';
import { IUser } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor() { }

  loginUser(userName: string, password: string): boolean {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'John',
      lastName: 'Papa'
    };
    return true;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
