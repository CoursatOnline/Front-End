import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Student } from 'src/app/_models/student';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  student:Student = new Student("","","","",);
  constructor(private userSer:UserService) { }



  ngOnInit(): void {
    this.userSer.getStudentById().subscribe({
      next: (res) => {this.student=res,console.log(this.student.user_Name)},
      error: (err) => console.log(err),
      complete: () => console.log('added'),
    })
  }


}
