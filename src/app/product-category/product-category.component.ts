import { ApiService } from './../services/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-product-category',
  templateUrl: 'product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit, OnDestroy {

  constructor(private apiService: ApiService) { }
  public listProductCategories: any[];
  url = '/api/productcategory/GetAllParent';

  ngOnInit() {
    this.apiService.getAll(this.url).subscribe((resJson) => {
    this.listProductCategories = resJson;
    console.log(this.listProductCategories);
    });
  }

  ngOnDestroy() {
  }
}
