import { AuthGuard } from './auth/auth.guard';
import { AuthenticationService } from './services/auth.service';
import { PagerService } from './services/pagiantion.service';
import { ApiService } from './services/api.service';
import { AppRouter } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CKEditorModule} from 'ngx-ckeditor';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductCategoryAddComponent } from './product-category/product-category-add.component';
import { ProductCategoryEditComponent } from './product-category/product-category-edit.component';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCategoryComponent,
    ProductCategoryAddComponent,
    ProductCategoryEditComponent,
    LoginComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    CommonModule,
    FormsModule,
    HttpModule,
    CKEditorModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    ApiService, PagerService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
