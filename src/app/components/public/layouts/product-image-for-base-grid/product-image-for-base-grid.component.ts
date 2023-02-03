import { Component, Input, OnInit } from '@angular/core';
import { ProductImage } from 'src/app/models/entities/productImage';
import { ProductImageService } from 'src/app/services/product-image.service';

@Component({
  selector: 'app-product-image-for-base-grid',
  templateUrl: './product-image-for-base-grid.component.html',
  styleUrls: ['./product-image-for-base-grid.component.css']
})
export class ProductImageForBaseGridComponent implements OnInit{
@Input() currentProductIdFromParent: number;

  productImages:ProductImage[]
  constructor(
    private productImageService:ProductImageService
  ){}

  ngOnInit(): void {
      if (this.currentProductIdFromParent) {
        this.getImageByProductId(this.currentProductIdFromParent)
      }
  }

  getImageByProductId(productId:number){
    this.productImageService.getProductImagesByProductId(productId).subscribe(response=>{
      this.productImages = response.data
    })
  }

  getFullImagePath(imagePath:string){
    return "https://localhost:44363/" + imagePath;
  }
}
