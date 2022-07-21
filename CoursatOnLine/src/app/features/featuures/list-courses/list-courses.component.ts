import { Component, OnInit } from '@angular/core';
import { Course } from './../../../_models/course';
import { ApiCourseService } from 'src/app/services/api-course.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  courses:Course[]=[];
  public mainUrl:string="";
  constructor(public api:ApiCourseService) { }

  ngOnInit(): void {
   this.mainUrl="https://localhost:7135/";
    this.api.getAllCourses().subscribe({
      next:a=>{this.courses=a}
    })
  }

}

