import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpclient:HttpClient) { }
  public get(url: string): Observable<Category|any>{
    return this.httpclient.get(url);
  }
  public post(url: string,category:Category,options: any):Observable<Category | any>{
    return this.httpclient.post(url,category);
  }
}
