import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userdata: string | any= localStorage.getItem('user');
  insname: string = JSON.parse(this.userdata).username;
  constructor() { }

  ngOnInit(): void {
    console.log(this.insname);
  }

}
