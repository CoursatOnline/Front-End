import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InstructorRoutingModule } from './instructor-routing.module';
import { AddCourseComponent } from './Courses/add-course/add-course.component';
import { ListCoursesComponent } from './Courses/list-courses/list-courses.component';
import { AddChapterComponent } from './Courses/add-chapter/add-chapter.component';
import { AddCourseToCategoryComponent } from './Courses/add-course-to-category/add-course-to-category.component';
import { UploadVidComponent } from '../features/upload-vid/upload-vid.component';
import { UploadComponent } from '../features/upload/upload.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AddCourseComponent,
    ListCoursesComponent,
    AddChapterComponent,
    AddCourseToCategoryComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InstructorRoutingModule,
    UploadVidComponent,
    UploadComponent
  ],providers:[
    DatePipe
  ]
})
export class InstructorModule { }
