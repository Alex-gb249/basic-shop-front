import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public loginForm: FormGroup = this.fb.group({
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
      this.loginForm.controls[field].errors &&
      this.loginForm.controls[field].touched
    );
  }

  login() {
    let data = this.loginForm.value;
    this.userService.login(data).subscribe(resp => {
      this.router.navigate(["/products"]);
    });

  }

}
