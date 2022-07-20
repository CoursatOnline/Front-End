import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-courses',
  templateUrl: './cart-courses.component.html',
  styleUrls: ['./cart-courses.component.css']
})
export class CartCoursesComponent implements OnInit {
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
  }


}
