import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-product-detail-list-page-button',
  templateUrl: './product-detail-list-page-button.component.html',
  styleUrls: ['./product-detail-list-page-button.component.css']
})
export class ProductDetailListPageButtonComponent extends AdminChildComponentBaseComponent implements OnInit{
  constructor(
    private routerService:RouterService,
    public override authService:AuthService
  ){
    super(authService)
    this.innerHTML = "Ürün Detay Listesi"
  }

  ngOnInit(): void {
      
  }

  routeToProductDetailListPage(){
    this.routerService.productDetailListPage()
  }
}
