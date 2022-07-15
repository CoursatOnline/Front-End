import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logoSource = './assets/images/CoursatOnLine Logo-dark.png';
  logoWidth = 130;
  logoHeight = 130;
  constructor() { }

  ngOnInit(): void {
  }

}
