import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../interfaces/cart.interface';
import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  saveCart(cart:Cart):Observable<Cart>{
    const headers = new HttpHeaders()
    .set('token', localStorage.getItem('token')!);

    return this.http.post<Cart>(`${this.baseUrl}api/carts/save`, cart, {headers}).pipe(
      tap(resp => {
        return resp;
      })
    );
  }

  createItem(item:Item):Observable<Item>{
    const headers = new HttpHeaders()
    .set('token', localStorage.getItem('token')!);

    return this.http.post<Item>(`${this.baseUrl}api/items/save`, item, {headers}).pipe(
      tap(resp => {
        return resp;
      })
    );
  }

  addItemToCart(cartId:number, itemId:number):Observable<void>{
    const headers = new HttpHeaders()
    .set('token', localStorage.getItem('token')!);
    let data = {
      cartId: cartId,
      itemId: itemId
    };

    return this.http.post<void>(`${this.baseUrl}api/items/addtocart`, data, {headers}).pipe(
      tap(resp => {
        return resp;
      })
    );
  }
}
