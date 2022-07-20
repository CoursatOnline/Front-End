import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './../_models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // private baseUrl:string ="https://localhost:7135/api/Course/GetAll";
  constructor(public http:HttpClient) { }

  getAllCourses(){
    return this.http.get<Course[]>("https://localhost:7135/api/Course/GetAll");
  }

}
