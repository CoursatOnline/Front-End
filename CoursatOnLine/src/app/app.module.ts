import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { FooterComponent } from './features/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { PreLoginNavComponent } from './features/pre-login-nav/pre-login-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './features/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PreLoginNavComponent
    ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    UploadComponent
  ],
  exports: [UploadComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
