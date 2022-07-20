import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { UserService } from 'src/app/services/user.service';
import { Category } from 'src/app/_models/category';

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
    public baseUrl:string = "https://localhost:7135/api/category/";

    constructor(private userSer:UserService,public catSer:CategoriesService) {
      this.catSer.get(this.baseUrl+"getall").subscribe(
        value => {this.categories = value;console.log(this.categories)},
        error => {console.log(error)}
      )
    }



  login(){
    return this.userSer.userExist();
  }
  logout(){
    this.userSer.clear();

  }
  ngOnInit(): void {
  }

}

