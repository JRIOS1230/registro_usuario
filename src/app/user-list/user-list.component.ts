import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

export interface User {
  identificacion: string; // Agrega este campo para reflejar la información del registro
  nombre: string;
  apellidos: string;
  email: string;
  celular: string;
  direccion: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css' ],
  imports: [CommonModule]
})
export class UserListComponent {
  users: User[] = []; // Arreglo de usuarios registrados
  sortAsc: boolean = true; // Controla el orden de la lista

  constructor(private userService: UserService) {
    this.userService.users$.subscribe(users => {
      this.users = users;
      console.log(this.users); // Añade este log para verificar
      this.sortUsers();
    });
  }
  
  // Método para añadir un usuario a la lista
  addUser(user: User) {
    this.users.push(user);
    this.sortUsers();
  }

  // Método para ordenar la lista
  sortUsers() {
    this.users.sort((a, b) => {
      const fullNameA = `${a.apellidos} ${a.nombre}`.toLowerCase();
      const fullNameB = `${b.apellidos} ${b.nombre}`.toLowerCase();
      return this.sortAsc ? fullNameA.localeCompare(fullNameB) : fullNameB.localeCompare(fullNameA);
    });
  }

  // Alternar entre orden ascendente y descendente
  toggleSortOrder() {
    this.sortAsc = !this.sortAsc;
    this.sortUsers();
  }
}