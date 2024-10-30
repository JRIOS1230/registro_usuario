import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

interface User {
  identificacion: string;
  nombre: string;
  apellidos: string;
  email: string;
  celular: string;
  direccion: string;
}

@Component({
  selector: 'app-user-register',
  standalone: true,
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  imports: [FormsModule]
})
export class UserRegisterComponent {
  newUser: User = {
    identificacion: '',
    nombre: '',
    apellidos: '',
    email: '',
    celular: '',
    direccion: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  onCreateUser() {
    this.userService.addUser(this.newUser); // Añade el nuevo usuario al servicio
    this.router.navigate(['/users']); // Redirige a la lista de usuarios
  }
}