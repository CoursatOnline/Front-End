import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadVideoService {
  baseApiUrl = "https://localhost:7135/api/uploadvid"

  constructor(public httpclient: HttpClient) { }
  upload(file:any):Observable<any> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    // Make http post request over api
    // with formData as req
    return this.httpclient.post(this.baseApiUrl, formData)
}
}
