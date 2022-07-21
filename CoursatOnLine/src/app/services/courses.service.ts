import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../_models/icourse';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpclient:HttpClient) { }
  public get(url: string): Observable<Course|any>{
    return this.httpclient.get(url);
  }
  public post(url: string,course:Course):Observable<Course | any>{
    return this.httpclient.post(url,course);
  }
  public getCourseByName(url: string): Observable<Course | any>{
    return this.httpclient.get(url);
  }
  public getCourseByInsId(url: string): Observable<Course[] |any>{
    return this.httpclient.get(url);
  }
}
