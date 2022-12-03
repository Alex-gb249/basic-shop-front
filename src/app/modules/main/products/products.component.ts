import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  userType: string = "user"
  quantity: number = 0;

  products:Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(resp => {
      this.products = resp;
    });
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
