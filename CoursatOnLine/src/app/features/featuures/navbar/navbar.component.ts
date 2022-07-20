import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CartService } from 'src/app/services/cart.service';
=======
import { CategoriesService } from 'src/app/services/categories.service';
>>>>>>> 48f584c48151f40788476192798c8e2922c5049e
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
<<<<<<< HEAD
  public searchTerm !: string;
  public totalItem : number = 0;

  constructor(private userSer:UserService,private cartService : CartService) { }
=======



    public categories:Category[] | any = [];
    public baseUrl:string = "https://localhost:7135/api/category/";

    constructor(private userSer:UserService,public catSer:CategoriesService) {
      this.catSer.get(this.baseUrl+"getall").subscribe(
        value => {this.categories = value;console.log(this.categories)},
        error => {console.log(error)}
      )
    }

>>>>>>> 48f584c48151f40788476192798c8e2922c5049e


  login(){
    return this.userSer.userExist();
  }
  logout(){
    this.userSer.clear();

  }
  ngOnInit(): void {
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

