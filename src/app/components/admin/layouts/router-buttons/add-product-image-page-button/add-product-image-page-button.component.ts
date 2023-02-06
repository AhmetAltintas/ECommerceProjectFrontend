import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-add-product-image-page-button',
  templateUrl: './add-product-image-page-button.component.html',
  styleUrls: ['./add-product-image-page-button.component.css']
})
export class AddProductImagePageButtonComponent extends AdminChildComponentBaseComponent implements OnInit{
  @Input() currentProductIdFromParent: number

  constructor(
    private routerService:RouterService,
    public override authService:AuthService
  ){
    super(authService)
    this.innerHTML = "Ürün Görseli Ekle"
  }

  ngOnInit(): void {
      
  }

  routeToAddProductImagePageByProductId(){
    this.routerService.addProductImagePageByProductId(this.currentProductIdFromParent)
  }
}
