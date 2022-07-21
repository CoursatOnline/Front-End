import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { Course } from 'src/app/_models/course';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css','./../navbar/navbar.component.css']
})
export class SearchComponent implements OnInit {

  searchWord:string|any = (this.route.snapshot.paramMap.get('id'))
  enterSearchValue:string = "";
  public mainUrl: string = "";
    @Output()
    searchTextChanged:EventEmitter<string> = new EventEmitter<string>();
  courses:Course[]|any =[];
  constructor(private searchSer:SearchService,private route:ActivatedRoute) { }
  onsearchTextChanged(){
    this.searchTextChanged.emit(this.enterSearchValue);
  }

  ngOnInit(): void {
    this.mainUrl = "https://localhost:7135/";
    this.searchSer.getCourses(this.searchWord).subscribe({
        next:(res)=>{this.courses = res,console.log(this.courses)},
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            console.log('get one');
          },

      }
    )
  }

}
