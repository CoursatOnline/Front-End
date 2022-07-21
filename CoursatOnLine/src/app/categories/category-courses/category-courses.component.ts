import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryCoursesService } from 'src/app/services/category-courses.service';
import { Course } from 'src/app/_models/course';

@Component({
  selector: 'app-category-courses',
  templateUrl: './category-courses.component.html',
  styleUrls: ['./category-courses.component.css']
})
export class CategoryCoursesComponent implements OnInit {

  courses: Course[] = [];
  public mainUrl: string = "";
  constructor(private catcrsSer:CategoryCoursesService,private route:ActivatedRoute) { }
  categoryId:any = (this.route.snapshot.paramMap.get('id'));
  ngOnInit(): void {
    this.mainUrl = "https://localhost:7135/";


    this.catcrsSer.getCategoryCourses(this.categoryId).subscribe({
      next: (res) => { this.courses = res, console.log(this.courses) },
      error: (err) => console.log(err),
      complete: () => console.log('added'),
    })
  }

}
