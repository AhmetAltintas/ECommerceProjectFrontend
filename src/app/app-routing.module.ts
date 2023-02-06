import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/public/pages/login/login.component';
import { ProductAddComponent } from './components/admin/pages/adds/product-add/product-add.component';
import { ProductComponent } from './components/public/pages/product/product.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/public/pages/register/register.component';
import { ProfileComponent } from './components/user/pages/profile/profile.component';
import { GuestGuard } from './guards/guest.guard';
import { AdminGuard } from './guards/admin.guard';
import { ProductDetailListComponent } from './components/admin/pages/lists/product-detail-list/product-detail-list.component';
import { AddProductImageComponent } from './components/admin/pages/adds/add-product-image/add-product-image.component';
import { MyCartComponent } from './components/public/pages/my-cart/my-cart.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId",component:ProductComponent},
  {path:"products/add", component:ProductAddComponent, canActivate:[AdminGuard]},
  {path:"login", component:LoginComponent, canActivate: [GuestGuard] },
  {path:"register", component:RegisterComponent, canActivate: [GuestGuard] },
  {path:"profile", component:ProfileComponent, canActivate: [LoginGuard]},
  {path:"product-detail-list", component:ProductDetailListComponent, canActivate:[AdminGuard]},
  {path:"add-product-image/:productId", component:AddProductImageComponent, canActivate: [AdminGuard]},
  {path:"my-cart", component: MyCartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
