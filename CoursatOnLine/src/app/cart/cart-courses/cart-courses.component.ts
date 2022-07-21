import { Component, OnInit } from '@angular/core';
import { ApiCourseService } from 'src/app/services/api-course.service';
import { CartService } from 'src/app/services/cart.service';
import { Course } from './../../_models/course';
@Component({
  selector: 'app-cart-courses',
  templateUrl: './cart-courses.component.html',
  styleUrls: ['./cart-courses.component.css']
})
export class CartCoursesComponent implements OnInit {
  public courses:Course[]=[];
  public products : any = [];
  public grandTotal !: number;
  public mainUrl: string="";
  constructor(private cartService : CartService,public api:ApiCourseService) { }

  ngOnInit(): void {
    this.mainUrl = "https://localhost:7135/";

    this.api.getAllCourses().subscribe({
      next: a => { this.courses = a }
    });
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }


}
