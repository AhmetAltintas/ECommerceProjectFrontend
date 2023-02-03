import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductDetailDto } from 'src/app/models/entities/dtos/productDetailDto';
import { Product } from 'src/app/models/entities/product';
import { ProductImage } from 'src/app/models/entities/productImage';
import { CartService } from 'src/app/services/cart.service';
import { ProductImageService } from 'src/app/services/product-image.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  
  currentProduct: ProductDetailDto;
  products: ProductDetailDto[];
  dataLoaded = false;
  filterText="";

  constructor(
    private productService:ProductService, 
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService,
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategoryId(params["categoryId"])
      }
      else{
        this.getProductDetails()
      }
    })
  }

  getProductDetails() {
    this.productService.getProductDetails().subscribe(response=>{      
      this.products = response.data;
      this.dataLoaded = true;
    })
  }

  getProductsByCategoryId(categoryId:number) {
    this.productService.getProductDetailsByCategory(categoryId).subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    })
  }

  addToCart(product:Product){
    if(product.productId===1){
      this.toastrService.error("Hata","Bu ürün sepete eklenemez.")
    }else{
      this.toastrService.success("Sepete eklendi",product.productName)
      this.cartService.addToCart(product);
    }
  }
}
