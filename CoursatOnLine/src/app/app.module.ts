import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './features/featuures/navbar/navbar.component';
import { FooterComponent } from './features/featuures/footer/footer.component';
import { HomeComponent } from './features/featuures/home/home.component';
import { PreLoginNavComponent } from './features/featuures/pre-login-nav/pre-login-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './features/upload/upload.component';
import { ListCoursesComponent } from './features/featuures/list-courses/list-courses.component';
import { CSharpComponent } from './courses/csharp/csharp.component';
import { JavaScriptComponent } from './courses/java-script/java-script.component';
import { FeatuuresModule } from './features/featuures/featuures.module';
import { PaythonComponent } from './courses/paython/paython.component';
import { ExcelComponent } from './courses/excel/excel.component';
import { PowerpointComponent } from './courses/powerpoint/powerpoint.component';
import { AngularComponent } from './courses/angular/angular.component';
import { ReactComponent } from './courses/react/react.component';
import { MvcComponent } from './courses/mvc/mvc.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { CartCoursesComponent } from './cart/cart-courses/cart-courses.component';


import { NavbarafterloginComponent } from './features/featuures/navbarafterlogin/navbarafterlogin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PreLoginNavComponent,
    ListCoursesComponent,
    CSharpComponent,
    JavaScriptComponent,
    PaythonComponent,
    ExcelComponent,
    PowerpointComponent,
    AngularComponent,
    ReactComponent,
    MvcComponent,NavbarafterloginComponent,CartCoursesComponent,StudentHomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FeatuuresModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    UploadComponent,
    FormsModule
  ],
  exports: [UploadComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
