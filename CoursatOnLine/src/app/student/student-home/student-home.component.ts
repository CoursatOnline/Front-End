import { Component, OnInit } from '@angular/core';
import { ApiCourseService } from 'src/app/services/api-course.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiCourseService) { }

  ngOnInit(): void {
  //   this.api.getProducts()
  //   .subscribe((res: any)=>{
  //     this.productList=res;
  //     this.filterCategory=res;
  //     this.filterCategory.array.forEach((a:any) => {
  //       if(a.category ==="C#" || a.category ==="Javascript"){
  //         a.category ="Python"
  //       }
  //       Object.assign(a,{quantity:1,total:a.price});
  //     });
  // });
 
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

