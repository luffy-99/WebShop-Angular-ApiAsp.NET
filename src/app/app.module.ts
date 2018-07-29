import { ApiService } from './services/api.service';
import { AppRouter } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductCategoryAddComponent } from './product-category/product-category-add.component';
import { ProductCategoryEditComponent } from './product-category/product-category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCategoryComponent,
    ProductCategoryAddComponent,
    ProductCategoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
