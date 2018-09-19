import { AuthGuard } from './admin/auth/auth.guard';
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
import { HomeComponent } from './admin/home/home.component';
import { ProductCategoryComponent } from './admin/product-category/product-category.component';
import { ProductCategoryAddComponent } from './admin/product-category/product-category-add.component';
import { ProductCategoryEditComponent } from './admin/product-category/product-category-edit.component';
import { LoginComponent } from './admin/login/login.component';
import { TemplateComponent } from './admin/template/template.component';
import { AuthInterceptor } from './admin/auth/auth.interceptor';
import { TemplateclientComponent } from './client/templateclient/templateclient.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCategoryComponent,
    ProductCategoryAddComponent,
    ProductCategoryEditComponent,
    LoginComponent,
    TemplateComponent,
    TemplateclientComponent
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
