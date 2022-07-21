import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Instructor } from 'src/app/_models/instructor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  insIdStr:string |any = localStorage.getItem('userId');
  insId = JSON.parse(this.insIdStr);
  // insObj:Instructor = new Instructor(0,"","","","","","",true);
  insObj:any = {};
  baseURL : string ="https://localhost:7135/api/Instructor/getById/";
  public userimage = "";
  logoSource = './assets/images/CoursatOnLine Logo.png';
  logoWidth = 70;
  logoHeight = 65;
  isLoggedIn = false;
  constructor(private userSer:UserService) { }


  login(){
    return this.userSer.userExist();
  }
  logout(){
    this.userSer.clear();

  }
  ngOnInit(): void {
    this.userSer.getInsById(this.baseURL, this.insId).subscribe(
      next => {this.insObj = next;this.userimage = "https://localhost:7135/"+this.insObj.image;},
      error => {console.log(error)}
    )
  }

}

