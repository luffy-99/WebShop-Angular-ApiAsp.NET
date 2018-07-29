import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-product-category-add',
    templateUrl: 'product-category-add.component.html',
    styleUrls: ['./../app.component.css']
})
export class ProductCategoryAddComponent implements OnInit {
    constructor(private apiService: ApiService, private router: Router) {}
    private urlCreateProductCategory = '/api/productcategory/create';
    private urlGetParent = 'api/productcategory/GetAllParent';
    private parentCategories: any;
    ngOnInit() {
        this.apiService.getAll(this.urlGetParent).subscribe(resJson => console.log(this.parentCategories = resJson));
    }
    onSubmit(data: any) {
        this.apiService.Add(this.urlCreateProductCategory, data).subscribe(res => {
            if (res) {
                alert('Success');
                this.router.navigate(['productcategory']);
            }
        });
    }
}
