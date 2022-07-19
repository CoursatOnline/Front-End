import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_TYPE } from '../_models/login';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router:Router) { }
  setUser(data:LOGIN_TYPE):void{
    window.localStorage.setItem('token',`Bearer ${data.token}`);
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
  userExist():boolean{
    return this.getUser() !==  null;
  }

  clear(){
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
