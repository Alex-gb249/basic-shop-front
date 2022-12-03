import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
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
      roles: ["ROLE_USER"],
    }
    console.log(data);

  }

}
