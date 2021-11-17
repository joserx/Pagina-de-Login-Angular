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
  username: string = 'Jose';

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.user = this.router.getCurrentNavigation()?.extras?.state;
  }

  ngOnInit(): void {
    this.createForm();
  }
  public createForm() {
    this.form = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      cep: [''],
      tel: [''],
    });
    this.form.patchValue(this.user);
  }
  public updateUser() {
    this.userService.updateUser(this.form.value).subscribe(
      (response) => {
        alert('Usuario Atualizado!');
      },
      (error) => {
        alert(error);
      }
    );
  }
}
