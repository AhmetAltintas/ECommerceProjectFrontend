import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/public/pages/product/product.component';
import { CategoryComponent } from './components/public/layouts/category/category.component';
import { NaviComponent } from './components/public/layouts/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { ProductDetailFilterPipe } from './pipes/product-detail-filter.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/public/layouts/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/admin/pages/adds/product-add/product-add.component';
import { LoginComponent } from './components/public/pages/login/login.component';
import { ProductImageForBaseGridComponent } from './components/public/layouts/product-image-for-base-grid/product-image-for-base-grid.component';
import { AdminChildComponentBaseComponent } from './components/admin/bases/admin-child-component-base/admin-child-component-base.component';
import { CommonChildComponentBaseComponent } from './components/public/bases/common-child-component-base/common-child-component-base.component';
import { PublicChildComponentBaseComponent } from './components/public/bases/public-child-component-base/public-child-component-base.component';
import { UserChildComponentBaseComponent } from './components/user/bases/user-child-component-base/user-child-component-base.component';
import { RegisterComponent } from './components/public/pages/register/register.component';
import { HomePageButtonComponent } from './components/public/layouts/router-buttons/home-page-button/home-page-button.component';
import { LoginPageButtonComponent } from './components/public/layouts/router-buttons/login-page-button/login-page-button.component';
import { RegisterPageButtonComponent } from './components/public/layouts/router-buttons/register-page-button/register-page-button.component';
import { AccountOptionsComponent } from './components/user/layouts/account-options/account-options.component';
import { LogoutButtonComponent } from './components/user/layouts/router-buttons/logout-button/logout-button.component';
import { ProfilePageButtonComponent } from './components/user/layouts/router-buttons/profile-page-button/profile-page-button.component';
import { ProfileComponent } from './components/user/pages/profile/profile.component';
import { UpdateEmailComponent } from './components/user/layouts/updates/update-email/update-email.component';
import { UpdateFirstAndLastNameComponent } from './components/user/layouts/updates/update-first-and-last-name/update-first-and-last-name.component';
import { UpdatePasswordComponent } from './components/user/layouts/updates/update-password/update-password.component';
import { AdministrationDropdownComponent } from './components/admin/layouts/administration-dropdown/administration-dropdown.component';
import { AddProductPageButtonComponent } from './components/admin/layouts/router-buttons/add-product-page-button/add-product-page-button.component';
import { ProductDetailListComponent } from './components/admin/pages/lists/product-detail-list/product-detail-list.component';
import { ProductDetailListPageButtonComponent } from './components/admin/layouts/router-buttons/product-detail-list-page-button/product-detail-list-page-button.component';
import { UpdateProductComponent } from './components/admin/layouts/updates/update-product/update-product.component';
import { DeleteProductComponent } from './components/admin/layouts/deletes/delete-product/delete-product.component';
import { TokenInterceptor } from './interceptors/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent,
    ProductImageForBaseGridComponent,
    AdminChildComponentBaseComponent,
    CommonChildComponentBaseComponent,
    PublicChildComponentBaseComponent,
    UserChildComponentBaseComponent,
    RegisterComponent,
    HomePageButtonComponent,
    LoginPageButtonComponent,
    RegisterPageButtonComponent,
    AccountOptionsComponent,
    LogoutButtonComponent,
    ProfilePageButtonComponent,
    ProfileComponent,
    UpdateEmailComponent,
    UpdateFirstAndLastNameComponent,
    UpdatePasswordComponent,
    AdministrationDropdownComponent,
    AddProductPageButtonComponent,
    ProductDetailListComponent,
    ProductDetailListPageButtonComponent,
    ProductFilterPipe,
    ProductDetailFilterPipe,
    UpdateProductComponent,
    DeleteProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
