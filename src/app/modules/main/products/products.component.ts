import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  userType: string = "user"
  quantity: number = 0;

  products = [
    {
      id: 1,
      name: "Camiseta",
      value: 35000,
      stock: 30,
      image: "https://srv.latostadora.com/designall.dll/angular__angularjs--i:135623783236013562321243;c:783236;s:H_J3;w:700;h:520;k:371ef3cabec6a9ebeebfd885b2395da8.jpg"
    },
    {
      id: 1,
      name: "Camiseta",
      value: 35000,
      stock: 30,
      image: "https://srv.latostadora.com/designall.dll/angular__angularjs--i:135623783236013562321243;c:783236;s:H_J3;w:700;h:520;k:371ef3cabec6a9ebeebfd885b2395da8.jpg"
    },
    {
      id: 1,
      name: "Camiseta",
      value: 35000,
      stock: 30,
      image: "https://srv.latostadora.com/designall.dll/angular__angularjs--i:135623783236013562321243;c:783236;s:H_J3;w:700;h:520;k:371ef3cabec6a9ebeebfd885b2395da8.jpg"
    },
    {
      id: 1,
      name: "Camiseta",
      value: 35000,
      stock: 30,
      image: "https://srv.latostadora.com/designall.dll/angular__angularjs--i:135623783236013562321243;c:783236;s:H_J3;w:700;h:520;k:371ef3cabec6a9ebeebfd885b2395da8.jpg"
    },
    {
      id: 1,
      name: "Camiseta",
      value: 35000,
      stock: 30,
      image: "https://srv.latostadora.com/designall.dll/angular__angularjs--i:135623783236013562321243;c:783236;s:H_J3;w:700;h:520;k:371ef3cabec6a9ebeebfd885b2395da8.jpg"
    },
    {
      id: 1,
      name: "Camiseta",
      value: 35000,
      stock: 30,
      image: "https://srv.latostadora.com/designall.dll/angular__angularjs--i:135623783236013562321243;c:783236;s:H_J3;w:700;h:520;k:371ef3cabec6a9ebeebfd885b2395da8.jpg"
    },
    {
      id: 1,
      name: "Camiseta",
      value: 35000,
      stock: 30,
      image: "https://srv.latostadora.com/designall.dll/angular__angularjs--i:135623783236013562321243;c:783236;s:H_J3;w:700;h:520;k:371ef3cabec6a9ebeebfd885b2395da8.jpg"
    },
  ]

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public productForm: FormGroup = this.fb.group({
    name: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
    ],
    value: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
    ],
    stock: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
    ],
  })

  validField(field: string) {
    return (
      this.productForm.controls[field].errors &&
      this.productForm.controls[field].touched
    );
  }

  changeQuantity(action: string) {
    if (action === "plus") {
      this.quantity++;
    } else if (action === "minus") {
      if(this.quantity === 0){
        this.quantity = 0
      }else{
        this.quantity--;
      }
    }


  }

}
