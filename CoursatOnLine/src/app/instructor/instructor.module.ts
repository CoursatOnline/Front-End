import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InstructorRoutingModule } from './instructor-routing.module';
import { AddCourseComponent } from './Courses/add-course/add-course.component';
import { ListCoursesComponent } from './Courses/list-courses/list-courses.component';
import { AddChapterComponent } from './Courses/add-chapter/add-chapter.component';


@NgModule({
  declarations: [
    AddCourseComponent,
    ListCoursesComponent,
    AddChapterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InstructorRoutingModule
  ]
})
export class InstructorModule { }
