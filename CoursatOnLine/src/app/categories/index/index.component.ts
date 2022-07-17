import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from '../../_models/category';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public mainUrl:string = "https://localhost:7135/";
  public cats:Category[] | any = [];
  public baseUrl:string = "https://localhost:7135/api/category/";
  constructor(public catSer:CategoriesService) {
    this.catSer.get(this.baseUrl+"getall").subscribe(
      value => {this.cats = value;/*console.log(this.cats)*/},
      error => {console.log(error)}
    )
  }

  ngOnInit(): void {

  }

}
