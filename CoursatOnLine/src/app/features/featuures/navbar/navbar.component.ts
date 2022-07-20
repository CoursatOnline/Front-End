import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoSource = './assets/images/CoursatOnLine Logo.png';
  logoWidth = 70;
  logoHeight = 65;
  isLoggedIn = true;
  constructor(private userSer:UserService) { }


  login(){
    return this.userSer.userExist();
  }
  logout(){
    this.userSer.clear();

  }
  ngOnInit(): void {
  }

}

