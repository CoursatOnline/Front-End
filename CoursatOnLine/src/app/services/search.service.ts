import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl:string = 'https://localhost:7135/api/';
  constructor(private http:HttpClient) { }

  getCourses(word:string){
    return this.http.get<Course[]>(`${this.baseUrl}search/${word}`)
   }

}
