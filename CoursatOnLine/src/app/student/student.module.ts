import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './student-home/student-home.component';
import { LearningComponent } from './learning/learning.component';

const routes:Routes=[

]

@NgModule({
  declarations: [
<<<<<<< HEAD
=======
    //StudentHomeComponent
    LearningComponent
>>>>>>> 74ca3784529cb3e282d8d217baca74cca482036d
  ],
  imports: [
  CommonModule,
    StudentRoutingModule,RouterModule.forChild(routes)
  ]
})

export class StudentModule { }
