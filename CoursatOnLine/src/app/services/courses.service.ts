import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpclient:HttpClient) { }
  public get(url: string): Observable<Course|any>{
    return this.httpclient.get(url);
  }
  public post(url: string,course:Course,options: any):Observable<Course | any>{
    return this.httpclient.post(url,course);
  }
}
