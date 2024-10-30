import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userServiceMock: any;

  beforeEach(async () => {
    userServiceMock = {
      users$: of([]),
      addUser: jasmine.createSpy('addUser'),
    };

    await TestBed.configureTestingModule({
      imports: [UserListComponent, CommonModule],
      providers: [{ provide: UserService, useValue: userServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort users by name', () => {
    component.users = [
      { identificacion: '1', nombre: 'Bob', apellidos: 'Smith', email: '', celular: '', direccion: '' },
      { identificacion: '2', nombre: 'Alice', apellidos: 'Johnson', email: '', celular: '', direccion: '' },
    ];

    // Orden ascendente
    component.sortAsc = true;
    component.sortUsers();
    expect(component.users[0].nombre).toBe('Alice');
    expect(component.users[1].nombre).toBe('Bob');

    // Orden descendente
    component.sortAsc = false;
    component.sortUsers();
    expect(component.users[0].nombre).toBe('Bob');
    expect(component.users[1].nombre).toBe('Alice');
  });
});