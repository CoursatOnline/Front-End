import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LOGIN_TYPE } from '../_models/login';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId:any;
  roles:any;
  private baseUrl:string = 'https://localhost:7135/api/';
   //private baseUrl:string = 'https://localhost:44344//api/Auth/token';//IIS Express
  constructor(private router:Router,private http:HttpClient) { }
  setUser(data:LOGIN_TYPE):void{
    window.localStorage.setItem('token',`Bearer ${data.token}`);
    window.localStorage.setItem('userId',JSON.stringify(data.id));
    window.localStorage.setItem('roles',JSON.stringify(data.roles));
    window.localStorage.setItem('user',JSON.stringify(data) )
    console.log('from userLogin',data);
  }
  getUser(): LOGIN_TYPE|null{
    const userData = window.localStorage.getItem('user')
    if(!userData){
      return null;
    }
    return JSON.parse(userData);
  }

  getUserToken():string{
    return window.localStorage.getItem('token') || '';
  }

  getUserId():number|null{
    let userId = window.localStorage.getItem('userId');
    if(!userId){
      return null;
    }
    return JSON.parse(userId);
  }
  getUserRole():string|null{
    let roles = window.localStorage.getItem('roles');
    if(!roles){
      return null;
    }
     return JSON.parse(roles);
  }
  userExist():boolean{
    return this.getUser() !==  null;
  }


  getStudentById():Observable<any> {
    this.userId = this.getUserId();
    return this.http.get(`${this.baseUrl}student/${this.userId}`);
  }
  clear(){
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
