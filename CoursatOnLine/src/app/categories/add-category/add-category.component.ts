import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UploadComponent } from 'src/app/features/upload/upload.component';
import { Category } from 'src/app/_models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  public category:Category|any = {};
  private adminid:number |any = 0;
  public baseUrl:string = "https://localhost:7135/api/category/create";
  public options : any  = {
    headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'authorization': this.userSer.getUserToken()
    })
}
  constructor(public catSer:CategoriesService,private router:Router,private userSer: UserService) {}

  ngOnInit(): void {
    this.adminid = localStorage.getItem('userId');
  }
  public onCreate(value:any){
    this.category.name = value.catname;
    this.category.adminId = this.adminid;
    // this.category.show = value.showflag;
    this.category.image = UploadComponent.shortLink;
    // console.log(this.category);
    if(UploadComponent.shortLink !== ""){
      this.catSer.post(this.baseUrl , this.category, this.options ).subscribe(
        next => {console.log(next); /*this.router.navigate(['/list']);*/},
        error => {console.log(error)}
      )
    }


    // console.log("category created");
    // console.log(UploadComponent.shortLink);
    // console.log(value)
  }
}
