import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService } from 'src/app/services/courses.service';
import { CategoriescoursesService } from 'src/app/services/categoriescourses.service';
import { Course } from 'src/app/_models/icourse';
import { UserService } from 'src/app/services/user.service';
import { UploadComponent } from 'src/app/features/upload/upload.component';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course:Course|any = {}; /** Course object to bind to  */
  insid: string |any  =  ""; /** get the instructor id from local storage and store it here */
  crsId: number |any  = 0;          /** get saved course id to use it later */
  crscatsIds : number[] |any = [];  /** get selected categories that the course belong to  */
   /** Base Url for courses */
  public courseBaseUrl:string = "https://localhost:7135/api/course/";
  alertflag : boolean = false;

  constructor(private courseSer:CoursesService, private catCoursesSer:CategoriescoursesService,private userSer:UserService,private router:Router) { }

  ngOnInit(): void {

    this.insid = localStorage.getItem('userId');
  }
  onCreate(value:any){
    this.course.name = value.crsname;
    this.course.description = value.crsdescription;
    this.course.price = value.crsprice;
    this.course.ispaid = JSON.parse(value.crsispaid);
    this.course.insid= JSON.parse(this.insid);
    // console.log(this.insid);
    // console.log(this.course.insid);
    if(UploadComponent.shortLink != ""){
      this.course.image = UploadComponent.shortLink;
      this.courseSer.post(this.courseBaseUrl + "create",this.course).subscribe(
        next  => {console.log(next);this.alertflag = true;this.router.navigate(['/Instructor'])},
        error => {console.log(error)}
        )
    }


    //console.log(`${this.courseBaseUrl}getbyname/?${this.testcoursename}`);
    // console.log(this.course);
  }
  close(){
    this.alertflag = false;
  }
}
