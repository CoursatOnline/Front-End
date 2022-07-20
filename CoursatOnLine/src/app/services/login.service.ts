import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_TYPE } from '../_models/login';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private userLoginSer:UserService,private router:Router) { }
  private baseUrl:string = 'https://localhost:7135/api/Auth/token';
  //private baseUrl:string = 'https://localhost:44344//api/Auth/token';//IIS Express
  login(data:{email:string,password:string}){
    this.http.post<LOGIN_TYPE>(this.baseUrl,data).subscribe(
     (data)=>{
        this.userLoginSer.setUser(data),
        console.log('from service',data);
        if(data.roles[0]=='Student'){
          this.router.navigate(['/index']);
        }
        else if(data.roles[0]=='Instructor'){
          this.router.navigate(['/listCourses']);
        }

     },
     (err) => console.log(err)

  );
  }
}
