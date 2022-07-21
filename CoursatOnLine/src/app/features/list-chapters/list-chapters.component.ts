import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ChapterService } from 'src/app/services/chapter.service';
import { Chapter } from 'src/app/_models/chapter';

@Component({
  standalone: true,
  selector: 'app-list-chapters',
  templateUrl: './list-chapters.component.html',
  styleUrls: ['./list-chapters.component.css'],
  imports:[CommonModule]
})
export class ListChaptersComponent implements OnInit {
  crsid:number | any = 0;
  public chapters:Chapter[] |any = [];
  public chapter:Chapter | any = {};
  public videosrc: string |any = "";
  BaseUrl: string | any =`https://localhost:7135`;
  chaptersBaseUrl:string | any = `https://localhost:7135/api/Chapter/GetAllByCrsId/`;
  chapterByIdBaseUrl: string | any = `https://localhost:7135/api/Chapter/getById/`;

  constructor(private chpterSer:ChapterService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.crsid = this.route.snapshot.paramMap.get('crsid');
    this.chpterSer.get(this.chaptersBaseUrl+this.crsid).subscribe(
      next => {this.chapters = next;
              console.log(this.chapters);
              },
      error => {console.log(error)}
    )
    this.videosrc = this.BaseUrl + "/Resources\\Videos\\React.mp4";
  }
  loadvideo(id: number){
    this.chpterSer.getById(this.chapterByIdBaseUrl+id).subscribe(
      next => {this.chapter = next;
               this.videosrc = `${this.BaseUrl}/${this.chapter.video}`;
               console.log(this.videosrc);
              },
      error => {console.log(error)}
    )
  }

}
