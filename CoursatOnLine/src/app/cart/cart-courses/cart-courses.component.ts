import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CartService } from 'src/app/services/cart.service';
=======
import { Course } from './../../_models/course';
import { CoursesService } from './../../services/courses.service';
>>>>>>> 48f584c48151f40788476192798c8e2922c5049e

@Component({
  selector: 'app-cart-courses',
  templateUrl: './cart-courses.component.html',
  styleUrls: ['./cart-courses.component.css']
})
export class CartCoursesComponent implements OnInit {
<<<<<<< HEAD
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
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
=======

  courses:Course[]=[];
  public mainUrl:string="";
  constructor(public courseServ:CoursesService) { }


  ngOnInit(): void {
    this.mainUrl="https://localhost:7135/";

    this.courseServ.getAllCourses().subscribe({
      next:a=>{this.courses=a}
    })
>>>>>>> 48f584c48151f40788476192798c8e2922c5049e
  }


}
