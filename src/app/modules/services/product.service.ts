import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}api/products`);
  }

  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}api/products/${id}`);
  }

  saveProduct(product:Product):Observable<Product>{
    const headers = new HttpHeaders()
    .set('token', localStorage.getItem('token')!);

    return this.http.post<Product>(`${this.baseUrl}api/products/save`, product, {headers}).pipe(
      tap(resp => {
        return resp;
      })
    );
  }

  eliminar(id:number):Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }

    const headers = new HttpHeaders()
    .set('auth', localStorage.getItem('token')!);

    return this.http.delete<boolean>(`${this.baseUrl}api/products/${id}`, {headers}).pipe(
      tap(resp => {
        return of(resp);
      })
    );
  }
}
