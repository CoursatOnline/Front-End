import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pre-login-nav',
  templateUrl: './pre-login-nav.component.html',
  styleUrls: ['./pre-login-nav.component.css']
})
export class PreLoginNavComponent implements OnInit {

  constructor(private userSer:UserService) { }

  ngOnInit(): void {
  }


}
