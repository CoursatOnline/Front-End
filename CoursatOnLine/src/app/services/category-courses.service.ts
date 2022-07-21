import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../_models/course';


@Injectable({
  providedIn: 'root'
})
export class CategoryCoursesService {

  private baseUrl:string = 'https://localhost:7135/api/cartegoriesCourse/';
  //private baseUrl:string = 'https://localhost:44344//api/Auth/token';//IIS Express
  constructor(public http:HttpClient) { }

  getCategoryCourses(id:string){
    return this.http.get<Course[]>(`${this.baseUrl}getAllCourses/${id}`)
   }

}
