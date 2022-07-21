import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { CategoryCoursesService } from 'src/app/services/category-courses.service';
import { SearchService } from 'src/app/services/search.service';
import { UserService } from 'src/app/services/user.service';
import { Category } from 'src/app/_models/category';
import { CategoryCourses } from 'src/app/_models/categoryCourses';
import { Course } from 'src/app/_models/course';

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



    public categories:Category[] | any = [];
    public categoryCourses:CategoryCourses[]|any =[]

    public baseUrl:string = "https://localhost:7135/api/category/";
    categoryId:any = (this.route.snapshot.paramMap.get('id'));
    courses: Course[] = [];
    searchText:string = "";
    // enterSearchValue:string = "";
    // @Output()
    // searchTextChanged:EventEmitter<string> = new EventEmitter<string>();
    constructor(
      private userSer:UserService,
      public catSer:CategoriesService,
      private catcrsSer:CategoryCoursesService,
      private route:ActivatedRoute,
      private searchSer:SearchService) {
      this.catSer.get(this.baseUrl+"getall").subscribe(
        value => {this.categories = value;console.log(this.categories[0]._CategoriesCourses)},
        error => {console.log(error)}
      )
    }
    // onsearchTextChanged(){
    //   this.searchTextChanged.emit(this.enterSearchValue);
    // }

    // onSearchTextEntered(searchValue:string){
    //   this.searchText = searchValue;
    //   console.log(this.searchText);
    // }

    getall(){
      this.catcrsSer.getCategoryCourses(this.categoryId).subscribe({
        next: (res) => { this.courses = res, console.log(this.courses) },
        error: (err) => console.log(err),
        complete: () => console.log('added'),
      })
    }

    // search(){
    //   this.searchSer.getCourses(this.word).subscribe({
    //     next: (res) => {console.log(res),this.courses=res},
    //     error: (err) => console.log(err),
    //     complete: () => console.log('added'),
    //   });
    // }

  login(){
    return this.userSer.userExist();
  }
  logout(){
    this.userSer.clear();

  }
  ngOnInit(): void {

  }

}

