import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './student-home/student-home.component';

const routes:Routes=[
  {path:"studentHome",component:StudentHomeComponent}
]

@NgModule({
  declarations: [
 
  
<<<<<<< HEAD
    //StudentHomeComponent
=======
  
>>>>>>> 48f584c48151f40788476192798c8e2922c5049e
  ],
  imports: [
  CommonModule,
    StudentRoutingModule,RouterModule.forChild(routes)
  ]
})

export class StudentModule { }
