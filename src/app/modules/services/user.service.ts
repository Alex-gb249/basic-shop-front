import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  saveUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}api/users/save`, user).pipe(
      tap(resp => {
        return resp;
      })
    );
  }

  listUser():Observable<User[]>{
    const headers = new HttpHeaders()
    .set('token', localStorage.getItem('token')!);

    return this.http.get<User[]>(`${this.baseUrl}api/users`, {headers}).pipe(
      tap(resp => {
        return resp;
      })
    );
  }

  addCartToUser(username:String, cartId:number):Observable<void>{
    const headers = new HttpHeaders()
    .set('token', localStorage.getItem('token')!);
    let data = {
      username: username,
      cartId: cartId
    };

    return this.http.post<void>(`${this.baseUrl}api/carts/addtouser`, data, {headers}).pipe(
      tap(resp => {
        return resp;
      })
    );
  }

  login(data:Login):Observable<string>{

    return this.http.post<string>(`${this.baseUrl}api/logi`, data).pipe(
      tap(resp => {
        if(resp != null){
          localStorage.setItem('token', resp)
        }
        return resp;
      })
    );
  }
}
