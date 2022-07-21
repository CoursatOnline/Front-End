import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/icourse';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  courses: Course[] |any = [];
  insid: number |any = localStorage.getItem('userId');
  crssUrl: string |any = "https://localhost:7135/api/Course/GetByInsId"
  public baseUrl: string | any = "https://localhost:7135/";
  constructor(private courseSer:CoursesService) {
    this.insid = parseInt(this.insid);
  }

  ngOnInit(): void {

    this.courseSer.getCourseByInsId(`${this.crssUrl}/${this.insid}`).subscribe(
      next => {this.courses = next; console.log(this.courses)},
      error => {console.log(error)}
    )
  }

}
