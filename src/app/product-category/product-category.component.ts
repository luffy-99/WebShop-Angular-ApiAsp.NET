import { PagerService } from './../services/pagiantion.service';
import { ApiService } from './../services/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-product-category',
  templateUrl: 'product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  constructor(private apiService: ApiService, private pagerService: PagerService) { }
  public listProductCategories: any[];
  private AllChecked = false;
  private keyword: string;
  private pager: any = {};
  private pagedItems: any[];
  ngOnInit() {
    this.LoadData();
  }
  LoadData() {
    this.apiService.getAll('/api/productcategory/GetAllParent').subscribe((resJson) => {
      this.listProductCategories = resJson;
      console.log(this.listProductCategories);
      this.setPage(1);
    }, error => {
      console.log(error);
    });
  }
  Delete(id: number) {
    const confirmProductCategory = confirm('Are you sure to delete?');
    if (confirmProductCategory) {
      this.apiService.Delete('api/productcategory/delete?id=', id).subscribe(response => {
        if (response) {
          this.LoadData();
        }
      });
    }
  }
  Search() {
    this.apiService.Search('api/productcategory/getByKeyWord?keyword=', this.keyword)
      .subscribe(resJson => this.listProductCategories = resJson);
  }
  CheckAll() {
    this.AllChecked = !this.AllChecked;
    for (const productCategory of this.listProductCategories) {
      productCategory.Checked = this.AllChecked;
    }
  }
  DeleteMulti(listID = []) {
    for (const productCategory of this.listProductCategories) {
      if (productCategory.Checked) {
        listID.push(productCategory.ID);
      }
    }
    const ID = JSON.stringify(listID);
    if (listID.length !== 0) {
      this.apiService.DeleteMulti('api/productcategory/deletemulti?checkedProductCategories=', ID).subscribe(response => {
        if (response) {
          this.LoadData();
        }
      });
    }
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.listProductCategories.length, page);
    this.pagedItems = this.listProductCategories.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
