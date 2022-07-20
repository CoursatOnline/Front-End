import { Component, OnInit } from '@angular/core';
import { Course } from './../../_models/course';
import { CoursesService } from './../../services/courses.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  courses:Course[]=[];
  public mainUrl:string="";
  constructor(public courseServe:CoursesService) { }

  ngOnInit(): void {
    this.mainUrl="https://localhost:7135/";

    this.courseServe.getAllCourses().subscribe({
      next:a=>{this.courses=a}
    });
  }

}
