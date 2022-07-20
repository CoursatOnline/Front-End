import { Component, OnInit } from '@angular/core';
import { Course } from './../../_models/course';
import { CoursesService } from './../../services/courses.service';

@Component({
  selector: 'app-cart-courses',
  templateUrl: './cart-courses.component.html',
  styleUrls: ['./cart-courses.component.css']
})
export class CartCoursesComponent implements OnInit {

  courses:Course[]=[];
  public mainUrl:string="";
  constructor(public courseServ:CoursesService) { }


  ngOnInit(): void {
    this.mainUrl="https://localhost:7135/";

    this.courseServ.getAllCourses().subscribe({
      next:a=>{this.courses=a}
    })
  }

}
