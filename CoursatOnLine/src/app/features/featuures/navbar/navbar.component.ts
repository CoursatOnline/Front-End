import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Instructor } from 'src/app/_models/instructor';
import { ActivatedRoute } from '@angular/router';

import { CartService } from 'src/app/services/cart.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CategoryCoursesService } from 'src/app/services/category-courses.service';
import { SearchService } from 'src/app/services/search.service';
import { Category } from 'src/app/_models/category';
import { CategoryCourses } from 'src/app/_models/categoryCourses';
import { Course } from 'src/app/_models/course';


import { ApiCourseService } from 'src/app/services/api-course.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  insIdStr:string |any = localStorage.getItem('userId');
  insId = JSON.parse(this.insIdStr);
  // insObj:Instructor = new Instructor(0,"","","","","","",true);
  insObj:any = {};
  baseURL : string ="https://localhost:7135/api/Instructor/getById/";
  public userimage = "";
  logoSource = './assets/images/CoursatOnLine Logo.png';
  logoWidth = 70;
  logoHeight = 65;
  isLoggedIn = false;

  public countOfCourses: any;

public searchTerm !: string;
public totalItem : number = 0;
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
      private searchSer:SearchService,private cartService : CartService,public api: ApiCourseService) {
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
  logout() {
    this.userSer.clear();

  }



  ngOnInit(): void {
    this.userSer.getInsById(this.baseURL, this.insId).subscribe(
      next => {this.insObj = next;this.userimage = "https://localhost:7135/"+this.insObj.image;},
      error => {console.log(error)}
    )

    this.api.getAllCourses().subscribe({
      next: a => {
        this.courses = a
        this.countOfCourses = this.courses.length;
      }
    })


    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
   }

}

