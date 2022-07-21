import { Component, OnInit } from '@angular/core';
import { Course } from './../../../_models/course';
import { CoursesService } from './../../../services/courses.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  courses:Course[]=[];
  searchText:string = "";
  public mainUrl:string="";
  constructor(public courseServ:CoursesService) { }

  ngOnInit(): void {
   this.mainUrl="https://localhost:7135/";
    this.courseServ.getAllCourses().subscribe({
      next:a=>{this.courses=a}
    })
  }

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

}

