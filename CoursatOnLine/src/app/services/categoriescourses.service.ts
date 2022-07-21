import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Categorycourse } from '../_models/categorycourse';

@Injectable({
  providedIn: 'root'
})
export class CategoriescoursesService {

  constructor(private httpclient:HttpClient) { }
  public post(url: string,categorycourse:Categorycourse):Observable<Categorycourse | any>{
    return this.httpclient.post(url,categorycourse);
  }
}
