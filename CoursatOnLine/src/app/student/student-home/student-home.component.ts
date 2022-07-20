import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ApiCourseService } from 'src/app/services/api-course.service';
=======
import { Course } from './../../_models/course';
import { CoursesService } from './../../services/courses.service';
import { UserService } from 'src/app/services/user.service';
import { Student } from 'src/app/_models/student';
import { User } from 'src/app/_models/user';
>>>>>>> 48f584c48151f40788476192798c8e2922c5049e

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
<<<<<<< HEAD
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiCourseService) { }

  ngOnInit(): void {
  //   this.api.getProducts()
  //   .subscribe((res: any)=>{
  //     this.productList=res;
  //     this.filterCategory=res;
  //     this.filterCategory.array.forEach((a:any) => {
  //       if(a.category ==="C#" || a.category ==="Javascript"){
  //         a.category ="Python"
  //       }
  //       Object.assign(a,{quantity:1,total:a.price});
  //     });
  // });
 
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
=======

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



>>>>>>> 48f584c48151f40788476192798c8e2922c5049e
  }


}

