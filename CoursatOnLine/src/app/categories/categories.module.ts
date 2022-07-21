import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';
import { IndexComponent } from './index/index.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UploadComponent } from '../features/upload/upload.component';
import { CategoryCoursesComponent } from './category-courses/category-courses.component';




@NgModule({
  declarations: [
    IndexComponent,
    AddCategoryComponent,
    CategoryCoursesComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoriesRoutingModule,
    UploadComponent

  ],
  exports: [

  ]
})
export class CategoriesModule { }
