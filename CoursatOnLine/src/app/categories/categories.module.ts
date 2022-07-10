import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { IndexComponent } from './index/index.component';




@NgModule({
  declarations: [
  
    IndexComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  exports: [

  ]
})
export class CategoriesModule { }
