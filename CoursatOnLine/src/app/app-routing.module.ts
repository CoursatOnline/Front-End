import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { CategoryCoursesComponent } from './categories/category-courses/category-courses.component';


import { HomeComponent } from './features/featuures/home/home.component';
import { ListCoursesComponent } from './features/featuures/list-courses/list-courses.component';
import { SearchComponent } from './features/featuures/search/search.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';

const routes: Routes = [
  { path: 'index', component:HomeComponent},
  { path: 'listCourses', component:ListCoursesComponent},


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
