import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoSource = './assets/images/CoursatOnLine Logo.png';
  logoWidth = 70;
  logoHeight = 65;
  isLoggedIn = false;
  constructor() { }

  ngOnInit(): void {
  }

}
