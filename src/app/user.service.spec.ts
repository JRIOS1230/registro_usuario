import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { User } from './user-list/user-list.component'; // Asegúrate de que esta importación sea correcta

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a user', () => {
    const user: User = {
      identificacion: '123456',
      nombre: 'John',
      apellidos: 'Doe',
      email: 'john@example.com',
      celular: '123456789',
      direccion: '123 Main St',
    };

    service.addUser(user);
    service.users$.subscribe(users => {
      expect(users.length).toBe(1);
      expect(users[0]).toEqual(user);
    });
  });
});