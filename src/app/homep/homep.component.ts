import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homep',
  templateUrl: './homep.component.html',
  styleUrls: ['./homep.component.scss'],
})
export class HomepComponent implements OnInit {
  form?: FormGroup;
  user: any;
  username: string;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.user = this.router.getCurrentNavigation()?.extras?.state;
    this.username = this.user.name;
  }

  ngOnInit(): void {
    this.createForm();
  }
  public createForm() {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      cep: [''],
      tel: [''],
    });
    this.form.patchValue(this.user);
  }
  public updateUser() {
    if (!this.form.value.password) {
      delete this.form.value.password;
    }
    this.userService.updateUser(this.form.value, this.user.id).subscribe(
      (response) => {
        alert('Usuario Atualizado!');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
