import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl:string = 'https://localhost:7135/api/Auth';
  //private baseUrl:string = 'https://localhost:44344//api/Auth/register';//IIS Express
  constructor( public http: HttpClient){}
  signUp(user:User,id:Number){
    return this.http.post<User>(`${this.baseUrl}/${id}`,user);

  }
}
