import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarafterlogin',
  templateUrl: './navbarafterlogin.component.html',
  styleUrls: ['./navbarafterlogin.component.css']
})
export class NavbarafterloginComponent implements OnInit {
  logoSource = './assets/images/CoursatOnLine Logo.png';
  logoWidth = 70;
  logoHeight = 65;
  // isLoggedIn = false;
  constructor() { }

  ngOnInit(): void {
  }

}
