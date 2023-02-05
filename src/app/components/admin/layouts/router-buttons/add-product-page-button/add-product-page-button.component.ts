import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-add-product-page-button',
  templateUrl: './add-product-page-button.component.html',
  styleUrls: ['./add-product-page-button.component.css']
})
export class AddProductPageButtonComponent extends AdminChildComponentBaseComponent implements OnInit{
  constructor(
    private routerService:RouterService,
    public override authService:AuthService
  ){
    super(authService)
    this.innerHTML = "Ürün ekle"
  }

  ngOnInit(): void {
      
  }

  routeToAddProductPage(){
    this.routerService.addProductPage();
  }
}
