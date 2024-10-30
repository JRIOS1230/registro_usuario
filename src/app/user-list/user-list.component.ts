import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

export interface User {
  identificacion: string;
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
    // Suscribirse al observable de usuarios desde el servicio
    this.userService.users$.subscribe(users => {
      this.users = users;
      console.log(this.users); // Log para verificar los usuarios recibidos
      this.sortUsers(); // Ordena los usuarios cuando se recibe la lista
    });
  }

  ngOnInit() {
  }

  // Método para añadir un usuario a la lista
  addUser(user: User) {
    this.users.push(user); // Agregar el nuevo usuario al arreglo
    this.sortUsers(); // Reordenar después de agregar
  }

  // Método para ordenar la lista de usuarios
  sortUsers() {
    this.users.sort((a, b) => {
      const fullNameA = `${a.apellidos} ${a.nombre}`.toLowerCase(); // Nombre completo en minúsculas
      const fullNameB = `${b.apellidos} ${b.nombre}`.toLowerCase();
      return this.sortAsc ? fullNameA.localeCompare(fullNameB) : fullNameB.localeCompare(fullNameA); // Ordenar ascendente o descendente
    });
  }

  // Alternar entre orden ascendente y descendente
  toggleSortOrder() {
    this.sortAsc = !this.sortAsc; // Cambiar el estado de orden
    this.sortUsers(); // Reordenar después de cambiar el estado
  }
}