import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [

  // [path:'category/categoryDetails/:id',Component:CategoryDetailsComponent]
  {path: 'list',component:IndexComponent},
  {path: 'add',component:AddCategoryComponent},
  {path: '',redirectTo:'list',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
