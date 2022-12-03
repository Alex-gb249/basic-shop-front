import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../../interfaces/user.interface';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public registerForm: FormGroup = this.fb.group({
    name: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
    ],
    username: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
    ],
    password: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
    ],
  })

  validField(field: string) {
    return (
      this.registerForm.controls[field].errors &&
      this.registerForm.controls[field].touched
    );
  }

  register() {
    let data = {
      ...this.registerForm.value,
      roles: [Role.ROLE_USER]
    }
    this.userService.saveUser(data).subscribe(resp => {
        this.router.navigate(["/login"]);
      }
    );
  }

}
