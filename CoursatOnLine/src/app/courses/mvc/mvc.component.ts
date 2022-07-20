import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { FilterPipe } from 'src/app/filter.pipe';
import { ApiCourseService } from 'src/app/services/api-course.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-mvc',
  templateUrl: './mvc.component.html',
  styleUrls: ['./mvc.component.css']
})
export class MvcComponent implements OnInit {
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiCourseService, private cartService : CartService) { }

  ngOnInit(): void {
  
  this.api.getProductsMVC()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="mvc" || a.category ==="api"){
          a.category ="backend"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
     // console.log(this.productList)
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
    filter(category:string){
      this.filterCategory = this.productList
      .filter((a:any)=>{
        if(a.category == category || category==''){
          return a;
        }
      })
    }
  }

  
    
  