import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CSharpComponent } from './../../courses/csharp/csharp.component';
import { JavaScriptComponent } from './../../courses/java-script/java-script.component';
import { PaythonComponent } from './../../courses/paython/paython.component';
import { AngularComponent } from './../../courses/angular/angular.component';
import { ReactComponent } from './../../courses/react/react.component';
import { ExcelComponent } from './../../courses/excel/excel.component';
import { PowerpointComponent } from './../../courses/powerpoint/powerpoint.component';
import { MvcComponent } from './../../courses/mvc/mvc.component';


const routes:Routes = [
  { path: 'csharp', component:CSharpComponent},
  { path: 'javascript', component:JavaScriptComponent},
  { path: 'paython', component:PaythonComponent},
  { path: 'angular', component:AngularComponent},
  { path: 'react', component:ReactComponent},
  { path: 'excel', component:ExcelComponent},
  { path: 'powerpont', component:PowerpointComponent},
  { path: 'mvc', component:MvcComponent},
];

@NgModule({
  declarations: [
   
  
   
  ],
  imports: [
CommonModule,FormsModule,RouterModule.forChild(routes)
  ]
})
export class FeatuuresModule { }
