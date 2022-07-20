import { Component, OnInit } from '@angular/core';
import { Course } from './../../../_models/course';
import { CoursesService } from './../../../services/courses.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

<<<<<<< HEAD
 
  constructor() { }
=======
  courses:Course[]=[];
  public mainUrl:string="";
  constructor(public courseServ:CoursesService) { }
>>>>>>> 48f584c48151f40788476192798c8e2922c5049e

  ngOnInit(): void {
   this.mainUrl="https://localhost:7135/";
    this.courseServ.getAllCourses().subscribe({
      next:a=>{this.courses=a}
    })
  }

}

