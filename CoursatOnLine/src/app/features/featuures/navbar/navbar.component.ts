import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { UserService } from 'src/app/services/user.service';
import { Category } from 'src/app/_models/category';
import { Course } from './../../../_models/course';
import { CoursesService } from './../../../services/courses.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoSource = './assets/images/CoursatOnLine Logo.png';
  logoWidth = 70;
  logoHeight = 65;
  isLoggedIn = false;

  public countOfCourses: any;


  public categories: Category[] | any = [];
  public baseUrl: string = "https://localhost:7135/api/category/";

  constructor(private userSer: UserService, public catSer: CategoriesService, public courseServ: CoursesService) {
    this.catSer.get(this.baseUrl + "getall").subscribe(
      value => { this.categories = value; console.log(this.categories) },
      error => { console.log(error) }
    )
  }
  courses: Course[] = [];


  login() {
    return this.userSer.userExist();
  }
  logout() {
    this.userSer.clear();

  }


  
  ngOnInit(): void {

    this.courseServ.getAllCourses().subscribe({
      next: a => {
        this.courses = a
        this.countOfCourses = this.courses.length;
      }
    })


  }

}

