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
  users: { identificacion: string;
    nombre: string;
    apellidos: string;
    email: string;
    celular: string;
    direccion: string; }[] = [];

  onUserCreated(user: { identificacion: string;
    nombre: string;
    apellidos: string;
    email: string;
    celular: string;
    direccion: string; }) {
    this.users.push(user);
  }
}
