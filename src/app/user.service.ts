import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user-list/user-list.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor() {    
    this.usersSubject.next([]); // Inicializa con un arreglo vacío
  }

  addUser(user: User) {
    const currentUsers = this.usersSubject.value;
    this.usersSubject.next([...currentUsers, user]);
  }
}
