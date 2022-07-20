import { Component, OnInit } from '@angular/core';
import { Course } from './../../_models/course';
import { CoursesService } from './../../services/courses.service';
import { UserService } from 'src/app/services/user.service';
import { Student } from 'src/app/_models/student';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  courses: Course[] = [];
  public mainUrl: string = "";
  constructor(public courseServe: CoursesService, private userSer: UserService) { }



  student: Student = new Student("", "", "", "",);



  ngOnInit(): void {
    this.mainUrl = "https://localhost:7135/";

    this.courseServe.getAllCourses().subscribe({
      next: a => { this.courses = a }
    });

    this.userSer.getStudentById().subscribe({
      next: (res) => { this.student = res, console.log(this.student.user_Name) },
      error: (err) => console.log(err),
      complete: () => console.log('added'),
    })



  }


}

