import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component'; // Importa UserRegisterComponent
import { UserListComponent } from './user-list/user-list.component'; // Importa UserListComponent

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, // Usa RouterTestingModule para manejar rutas
        UserRegisterComponent, // Importa UserRegisterComponent
        UserListComponent, // Importa UserListComponent
        AppComponent // Importa AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should initialize an empty users array`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.users).toEqual([]); // Verifica que el arreglo de usuarios esté vacío inicialmente
  });

  it('should add a user on user creation', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const newUser = {
      identificacion: '12345678',
      nombre: 'Juan',
      apellidos: 'Pérez',
      email: 'juan.perez@example.com',
      celular: '123456789',
      direccion: 'Calle Falsa 123'
    };

    app.onUserCreated(newUser); // Llama al método onUserCreated
    expect(app.users.length).toBe(1); // Verifica que el usuario se haya agregado
    expect(app.users[0]).toEqual(newUser); // Verifica que el usuario agregado sea el correcto
  });
});