import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegisterComponent } from './user-register.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserRegisterComponent', () => {
  let component: UserRegisterComponent;
  let fixture: ComponentFixture<UserRegisterComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    userService = jasmine.createSpyObj('UserService', ['addUser']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        UserRegisterComponent
      ],
      providers: [
        { provide: UserService, useValue: userService },
        { provide: Router, useValue: router }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserRegisterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a user and navigate on form submission', () => {
    component.newUser = {
      identificacion: '123456',
      nombre: 'John',
      apellidos: 'Doe',
      email: 'john@example.com',
      celular: '123456789',
      direccion: '123 Main St',
    };

    component.onCreateUser();

    expect(userService.addUser).toHaveBeenCalledWith(component.newUser);
    expect(router.navigate).toHaveBeenCalledWith(['/users']);
  });
});