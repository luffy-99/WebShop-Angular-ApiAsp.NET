import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { ProductCategoryEditComponent } from './product-category/product-category-edit.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryAddComponent } from './product-category/product-category-add.component';

const routing: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '', component: TemplateComponent, canActivate: [AuthGuard],
        children: [
            { path: 'productcategory', component: ProductCategoryComponent },
            { path: 'productcategory/add', component: ProductCategoryAddComponent },
            { path: 'productcategory/edit/:id', component: ProductCategoryEditComponent },
            { path: '**', component: HomeComponent }
        ]
    }
];
export const AppRouter = RouterModule.forRoot(routing);
