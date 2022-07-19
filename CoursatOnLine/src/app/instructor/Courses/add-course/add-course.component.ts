import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/_models/category';
import { Course } from 'src/app/_models/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  cats:Category|any = [];
  course:Course|any = {};
  public catBaseUrl:string = "https://localhost:7135/api/category/";
  public courseBaseUrl:string = "https://localhost:7135/api/course/";

  constructor(private courseSer:CoursesService, private catSer:CategoriesService) { }

  ngOnInit(): void {
    this.catSer.get(this.catBaseUrl+"getall").subscribe(
      value => {this.cats = value;/*console.log(this.cats)*/},
      error => {console.log(error)}
    )
  }
  onCreate(value:any){
    this.course.name = value.crsname;
    this.course.description = value.crsdescription;
    this.course.price = value.crsprice;
    this.course.ispaid = JSON.parse(value.crsispaid);
    this.course.insid = value.crsins;

    // this.courseSer.post(this.courseBaseUrl,this.course).subscribe

    console.log(this.course);
  }

}
