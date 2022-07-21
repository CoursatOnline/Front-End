import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


import { Category } from 'src/app/_models/category';
import { Course } from 'src/app/_models/icourse';
import { Categorycourse } from 'src/app/_models/categorycourse';
import { CoursesService } from 'src/app/services/courses.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CategoriescoursesService } from 'src/app/services/categoriescourses.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-add-course-to-category',
  templateUrl: './add-course-to-category.component.html',
  styleUrls: ['./add-course-to-category.component.css']
})
export class AddCourseToCategoryComponent implements OnInit {
  catcourseObj: Categorycourse | any = {}; /**objecto of entity category courses that represent many to many relationship */
  cats:Category|any   = []; /** list of loaded categories inside select input */
  courses:Course |any = []; /**List of loaded courses inside select input */
  alertflag: boolean = false;


  /** Base Url for categories */
  public catBaseUrl:string = "https://localhost:7135/api/category/";
  /** Base Url for courses */
  public courseBaseUrl:string = "https://localhost:7135/api/course/";
   /** Base Url for categories courses */
  public catCoursesBaseUrl:string = "https://localhost:7135/api/cartegoriescourse/";

  public options : any  = {
    headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'authorization': this.userSer.getUserToken()
    })
}

  constructor(private catSer:CategoriesService, private courseSer:CoursesService, private catCourseSer: CategoriescoursesService,private userSer:UserService, private date:DatePipe,private router:Router) { }

  ngOnInit(): void {
    this.catSer.get(this.catBaseUrl+"getall").subscribe(
      value => {this.cats = value;/*console.log(this.cats)*/},
      error => {console.log(error)}
    )
    this.courseSer.get(this.courseBaseUrl+"getall").subscribe(
      value => {this.courses = value},
      error => {console.log(error)}
    )

  }
  onAdd(value:any){
    this.catcourseObj.catid = parseInt(value.category);
    this.catcourseObj.courseid = parseInt(value.course);
    // this.catcourseObj.dateadded = this.date.transform(Date.now(),'YYYY-MM-dd HH:mm:SS');
    this.catcourseObj.show = true;
    console.log(this.catcourseObj);
    this.catCourseSer.post(this.catCoursesBaseUrl + "create" , this.catcourseObj).subscribe(
      next => {console.log(next); this.alertflag = true;this.router.navigate(['/Instructor'])},
      error => {console.log(error)}
    )
  }

  close(){
    this.alertflag = false;
  }
}
