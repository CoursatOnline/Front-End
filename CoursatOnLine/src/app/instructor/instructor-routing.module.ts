import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChapterComponent } from './Courses/add-chapter/add-chapter.component';
import { AddCourseComponent } from './Courses/add-course/add-course.component';
import { ListCoursesComponent } from './Courses/list-courses/list-courses.component';

const routes: Routes = [
  {path: "listcourses",component:ListCoursesComponent},
  {path: "addcourse",component:AddCourseComponent},
  {path: "addchapter",component:AddChapterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
