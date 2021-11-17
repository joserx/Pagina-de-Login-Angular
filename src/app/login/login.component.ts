import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  show: string = 'login';
  formRegister?: FormGroup;
  formLogin?: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  public showForm(value) {
    this.show = value;
  }
  public createForm() {
    this.formRegister = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      cep: [''],
      tel: [''],
    });
    this.formLogin = this.fb.group({
      emailLogin: [''],
      passwordLogin: [''],
    });
  }

  public createUser() {
    this.userService.createUser(this.formRegister.value).subscribe(
      (response) => {
        alert('Usuario Criado');
      },
      (error) => {
        alert(error);
        this.router.navigate(['/home'], {
          state: {
            username: 'jose',
            email: 'gatinha',
            password: 'naopodemari',
            cep: '0154',
            tel: '666',
          },
        });
      }
    );
  }
  public authUser() {
    this.userService.authUser(this.formLogin.value).subscribe(
      (response) => {
        alert(' Usuario Autenticado');
        this.router.navigate(['/home'], { state: response });
      },
      (error) => {
        alert(error);
      }
    );
  }
}
