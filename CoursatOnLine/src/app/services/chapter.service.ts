import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chapter } from '../_models/chapter';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(private httpclient:HttpClient) { }
  public post(url: string,chapter:Chapter,options :any):Observable<Chapter | any>{
    return this.httpclient.post(url,chapter);
  }
  public get(url: string):Observable<Chapter[] | any>{
    return this.httpclient.get(url);
  }
  public getById(url: string):Observable<Chapter | any>{
    return this.httpclient.get(url);
  }

}
