import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { Course } from 'src/app/_models/icourse';
import { Chapter } from 'src/app/_models/chapter';
import { CoursesService } from 'src/app/services/courses.service';
import { UploadVidComponent } from 'src/app/features/upload-vid/upload-vid.component';
import { UploadVideoService } from 'src/app/services/upload-video.service';
import { UserService } from 'src/app/services/user.service';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.css']
})
export class AddChapterComponent implements OnInit {
  alertflag: boolean |any = false;
  courses: Course[] | any = [];
  chapter: Chapter | any = {};
  crssBaseUrl : string = "https://localhost:7135/api/course/";
  chapterBaseUrl : string = "https://localhost:7135/api/chapter/";
  insid : number | any = localStorage.getItem('userId');
  public options : any  = {
    headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'authorization': this.userSer.getUserToken()
    })
}

  constructor(private crsSer:CoursesService, private userSer:UserService,private chpterSer:ChapterService) { }

  ngOnInit(): void {
    this.crsSer.get(this.crssBaseUrl + "getall").subscribe(
      next => {console.log(next);this.courses = next;},
      error => {console.log(error)}
    )
  }

  onCreate(value:any){
    this.chapter.title = value.chaptertitle;
    this.chapter.crsId = parseInt(value.courses);
    this.chapter.insId = parseInt(this.insid);
    if (UploadVidComponent.returnedLink !== ""){
      this.chapter.video = UploadVidComponent.returnedLink;
      this.alertflag = true;
      // console.log(this.chapter);
      this.chpterSer.post(this.chapterBaseUrl+"create",this.chapter,this.options).subscribe(
        next => {this.alertflag = true;},
        error => {console.log(error)}
      )
    }

  }
  close(){
      this.alertflag = false;
  }

}
