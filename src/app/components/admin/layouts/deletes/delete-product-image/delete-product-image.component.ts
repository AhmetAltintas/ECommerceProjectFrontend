import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductImage } from 'src/app/models/entities/productImage';
import { AuthService } from 'src/app/services/auth.service';
import { ProductImageService } from 'src/app/services/product-image.service';
import { TemplatesService } from 'src/app/services/templates.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-delete-product-image',
  templateUrl: './delete-product-image.component.html',
  styleUrls: ['./delete-product-image.component.css']
})
export class DeleteProductImageComponent extends AdminChildComponentBaseComponent implements OnInit{
  @Input() currentProductImagesFromParent: ProductImage[]

  constructor(
    private productImageService:ProductImageService,
    private toastrService: ToastrService,
    private templatesService: TemplatesService,
    public override authService:AuthService
  ){
    super(authService);
    this.innerHTML = "Sil"
  }

  ngOnInit(): void {
      
  }

  delete(image: ProductImage) {
    if (confirm("Bu görseli silmek istediğinizden emin misiniz ?")) {
      this.productImageService.delete(image).subscribe(response=> {
        this.toastrService.success(response.message)
        this.deleteFromArray(image.id)
      }, errorResponse => this.templatesService.errorResponse(errorResponse))
    }
  }

  deleteFromArray(id: number) {
    let index = this.currentProductImagesFromParent.findIndex(x=> x.id == id)
    this.currentProductImagesFromParent.splice(index, 1)
  }

  getFullImagePath(imagePath:string) {
    return "https://localhost:44363/" + imagePath;
  }

  reloadPage() {
    window.location.reload();
  }

  get getCurrentProductId(){
    return this.currentProductImagesFromParent.length > 0 ? this.currentProductImagesFromParent[0].productId : ""
  }
}
