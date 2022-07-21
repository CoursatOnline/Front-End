import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChapterComponent } from './Courses/add-chapter/add-chapter.component';
import { AddCourseToCategoryComponent } from './Courses/add-course-to-category/add-course-to-category.component';
import { AddCourseComponent } from './Courses/add-course/add-course.component';
import { ListCoursesComponent } from './Courses/list-courses/list-courses.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "home",component:HomeComponent},
  {path: "listcourses",component:ListCoursesComponent},
  {path: "addcourse",component:AddCourseComponent},
  {path: "addchapter",component:AddChapterComponent},
  {path: "addcoursetocategory", component:AddCourseToCategoryComponent},
  {path: "",redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
