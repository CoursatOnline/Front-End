import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { StudentHomeComponent } from 'src/app/student/student-home/student-home.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  title = 'ng-carousel-demo';

  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "assets/images/image1.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "assets/images/image4.jpg"}
  ];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {}

}
