import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { UserRegisterComponent } from "./user-register/user-register.component";
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template:`
    <router-outlet></router-outlet>
  `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[RouterOutlet, UserRegisterComponent, UserListComponent],
})
export class AppComponent {
  users: { nombre: string; apellidos: string }[] = [];

  onUserCreated(user: { nombre: string; apellidos: string }) {
    this.users.push(user);
  }
}
