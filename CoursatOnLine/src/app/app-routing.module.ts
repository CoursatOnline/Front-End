import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { CategoryCoursesComponent } from './categories/category-courses/category-courses.component';
import { ExcelComponent } from './courses/excel/excel.component';
import { MvcComponent } from './courses/mvc/mvc.component';


import { HomeComponent } from './features/featuures/home/home.component';
import { ListCoursesComponent } from './features/featuures/list-courses/list-courses.component';
<<<<<<< HEAD
import { SearchComponent } from './features/featuures/search/search.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
=======
import { LearningComponent } from './student/learning/learning.component';
import { CartCoursesComponent } from './cart/cart-courses/cart-courses.component';
>>>>>>> 74ca3784529cb3e282d8d217baca74cca482036d

const routes: Routes = [
  //{path:'index',component:ExcelComponent},
 { path: 'index', component:HomeComponent},
  { path: 'listCourses', component:ListCoursesComponent},
<<<<<<< HEAD


=======
  { path: 'learning', component:LearningComponent},
  { path: 'cart', component:CartCoursesComponent},
>>>>>>> 74ca3784529cb3e282d8d217baca74cca482036d
  {path: 'categoryCourses/:id',component:CategoryCoursesComponent},

  //{path: 'login',component:LoginComponent},
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(c => c.CategoriesModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(c => c.AuthModule) },
  {path:"studentHome",component:StudentHomeComponent},
  {path: 'register/:id',component:RegisterComponent},
  {path:'search/:id',component:SearchComponent},
  {path: 'login',component:LoginComponent},
  { path: '',   redirectTo: '/index', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
