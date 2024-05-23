import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: { username: string; password: string }[] = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ];
  private currentUserSubject = new BehaviorSubject<string | null>(null);
  currentUser$: Observable<string | null> =
    this.currentUserSubject.asObservable();

  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      localStorage.setItem('currentUser', username);
      this.currentUserSubject.next(username);
      return of(true);
    } else {
      return of(false);
    }
  }

  register(username: string, password: string): Observable<boolean> {
    const user = this.users.find((user) => user.username === username);
    if (user) {
      return of(false);
    } else {
      this.users.push({ username, password });
      localStorage.setItem('currentUser', username);
      this.currentUserSubject.next(username);
      return of(true);
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): Observable<boolean> {
    return this.currentUser$.pipe(map((currentUser) => !!currentUser));
  }
}
function of(arg0: boolean): Observable<boolean> {
  return new Observable<boolean>((observer) => {
    observer.next(arg0);
    observer.complete();
  });
}
