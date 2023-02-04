import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/public/pages/login/login.component';
import { ProductAddComponent } from './components/admin/pages/product-add/product-add.component';
import { ProductComponent } from './components/public/pages/product/product.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/public/pages/register/register.component';
import { ProfileComponent } from './components/user/pages/profile/profile.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId",component:ProductComponent},
  {path:"products/add", component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"profile", component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
