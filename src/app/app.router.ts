import { AuthGuard } from './admin/auth/auth.guard';
import { LoginComponent } from './admin/login/login.component';
import { TemplateComponent } from './admin/template/template.component';
import { ProductCategoryEditComponent } from './admin/product-category/product-category-edit.component';
import { ProductCategoryComponent } from './admin/product-category/product-category.component';
import { HomeComponent } from './admin/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryAddComponent } from './admin/product-category/product-category-add.component';
import { TemplateclientComponent } from './client/templateclient/templateclient.component';

const routing: Routes = [
    { path: 'admin/login', component: LoginComponent },
    {
        path: 'admin', component: TemplateComponent, canActivate: [AuthGuard],
        children: [
            { path: 'productcategory', component: ProductCategoryComponent },
            { path: 'productcategory/add', component: ProductCategoryAddComponent },
            { path: 'productcategory/edit/:id', component: ProductCategoryEditComponent },
            { path: '**', component: HomeComponent }
        ]
    },
    {
        path: 'client', component: TemplateclientComponent
    }
];
export const AppRouter = RouterModule.forRoot(routing);
