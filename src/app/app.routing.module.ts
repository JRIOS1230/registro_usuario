import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'register', component: UserRegisterComponent },
  { path: 'users', component: UserListComponent }, // Ruta para la lista de usuarios
  { path: '', redirectTo: '/register', pathMatch: 'full' }, // Redirección inicial
  { path: '**', redirectTo: '/register' } // Redirección para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}