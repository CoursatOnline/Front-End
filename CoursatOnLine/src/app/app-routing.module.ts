import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { CategoryCoursesComponent } from './categories/category-courses/category-courses.component';
import { ExcelComponent } from './courses/excel/excel.component';
import { MvcComponent } from './courses/mvc/mvc.component';

import { HomeComponent } from './features/featuures/home/home.component';
import { ListCoursesComponent } from './features/featuures/list-courses/list-courses.component';

const routes: Routes = [
  //{path:'index',component:ExcelComponent},
 { path: 'index', component:HomeComponent},
  { path: 'listCourses', component:ListCoursesComponent},
  {path: 'categoryCourses/:id',component:CategoryCoursesComponent},
  //{path: 'login',component:LoginComponent},
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(c => c.CategoriesModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(c => c.AuthModule) },
  {path: 'register/:id',component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  { path: '',   redirectTo: '/index', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
