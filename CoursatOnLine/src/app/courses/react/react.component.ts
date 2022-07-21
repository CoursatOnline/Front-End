import { Component, OnInit } from '@angular/core';
import { ApiCourseService } from 'src/app/services/api-course.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiCourseService, private cartService : CartService) { }

  ngOnInit(): void {
  
  this.api.getProductsReact()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="python" || a.category ==="api"){
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

  
    
  