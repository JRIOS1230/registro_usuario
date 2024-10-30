import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'; // Importa provideRouter para el enrutamiento
import { UserRegisterComponent } from './app/user-register/user-register.component';
import { UserListComponent } from './app/user-list/user-list.component';

enableProdMode();

// Bootstrap the application with routing
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'register', component: UserRegisterComponent },
      { path: 'users', component: UserListComponent },
      { path: '', redirectTo: '/register', pathMatch: 'full' },
      { path: '**', redirectTo: '/register' }
    ]) // Usa provideRouter para manejar las rutas
  ],
}).catch(err => console.error(err));
