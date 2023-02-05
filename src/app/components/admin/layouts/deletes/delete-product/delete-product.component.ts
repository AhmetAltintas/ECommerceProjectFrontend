import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/entities/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent extends AdminChildComponentBaseComponent implements OnInit{
  @Input() currentProductFromParent: Product

  constructor(
    private productService:ProductService,
    private toastrService:ToastrService,
    public override authService:AuthService
  ){
    super(authService)
    this.innerHTML = "Sil"
  }

  ngOnInit(): void {
      
  }

  delete(){
    this.productService.delete(this.currentProductFromParent).subscribe(response=>{
      this.toastrService.success(response.message)
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    }, errorResponse=>{
      this.toastrService.error(errorResponse.error.message)
    })
  }
}
