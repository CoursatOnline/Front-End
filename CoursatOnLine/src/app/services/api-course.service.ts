import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Course } from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class ApiCourseService {

  constructor(private http :HttpClient) { }
  getAllCourses(){//abdelrahman
    return this.http.get<Course[]>("https://localhost:7135/api/Course/GetAll");
  }
  getProductsMVC(){
    return this.http.get<any>("https://localhost:7135/api/Course/GetAllByName?word=mvc").pipe(map((res:any)=>{
      console.log(res)
      return res;
    }))
  }


  getProductsPython(){
    return this.http.get<any>("https://localhost:7135/api/Course/GetAllByName?word=python").pipe(map((res:any)=>{
      console.log(res)
      return res;
    }))
  }

  getProductsReact(){
    return this.http.get<any>("https://localhost:7135/api/Course/GetAllByName?word=React").pipe(map((res:any)=>{
      console.log(res)
      return res;
    }))
  }

  getProductsJS(){
    return this.http.get<any>("https://localhost:7135/api/Course/GetAllByName?word=javascript").pipe(map((res:any)=>{
      console.log(res)
      return res;
    }))
  }

  getProductsAngular(){
    return this.http.get<any>("https://localhost:7135/api/Course/GetAllByName?word=angular").pipe(map((res:any)=>{
      console.log(res)
      return res;
    }))
  }


  getProductsExcel(){
    return this.http.get<any>("https://localhost:7135/api/Course/GetAllByName?word=Excel").pipe(map((res:any)=>{
      console.log(res)
      return res;
    }))
  }

  getProductsCSharp(){
    return this.http.get<any>("https://localhost:7135/api/Course/GetAllByName?word=c%23").pipe(map((res:any)=>{
      console.log(res)
      return res;
    }))
  }


}
//https://localhost:7135/api/Course/GetAllByName?word=mvc
//