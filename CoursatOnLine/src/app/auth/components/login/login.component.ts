import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';
  constructor(private loginSer:LoginService) { }

  ngOnInit(): void {
  }

  loginform=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  userLogin(){
     if(this.loginform.valid){
      this.loginSer.login({email:this.email,password:this.password});

     }
  }

}
