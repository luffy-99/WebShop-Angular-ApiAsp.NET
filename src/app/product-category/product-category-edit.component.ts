import { ApiService } from './../services/api.service';
import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-product-category-edit',
    templateUrl: 'product-category-edit.component.html',
    styleUrls: ['./../app.component.css']
})

export class ProductCategoryEditComponent implements OnInit, OnDestroy {
    constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute,
    private router: Router) {}
    private productCategory: any;
    private parentCategories: any;
    private subscription: Subscription;
    urlById = '/api/productcategory/GetById/';
    urlEdit = '/api/productcategory/update';
    urlGetParent = 'api/productcategory/GetAllParent';
    id: number;
    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });
        this.apiService.getById(this.urlById, this.id).subscribe(resJson => console.log( this.productCategory = resJson));
        this.apiService.getAll(this.urlGetParent).subscribe(resJson => console.log(this.parentCategories = resJson));
    }
    onSubmit() {
        this.apiService.Edit(this.urlEdit, this.productCategory).subscribe(response => {
            if (response) {
                alert('Success!');
                this.router.navigate(['/productcategory']);
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
