import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLogged = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  isLogged$ = this._isLogged.asObservable();

  login(email: string, password: string): boolean {
    if (!email || !password) return false;
    localStorage.setItem('token', 'fake-jwt-token');
    this._isLogged.next(true);
    return true;
  }

  logout(): void {
    localStorage.removeItem('token');
    this._isLogged.next(false);
  }

  isLoggedIn(): boolean { return this._isLogged.getValue(); }

  constructor() { }
}
