import { Component, OnInit } from '@angular/core';
import { ProductDetailDto } from 'src/app/models/entities/dtos/productDetailDto';
import { Product } from 'src/app/models/entities/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail-list',
  templateUrl: './product-detail-list.component.html',
  styleUrls: ['./product-detail-list.component.css']
})
export class ProductDetailListComponent implements OnInit{

  filterText: string
  productDetailDTOs: ProductDetailDto[]
  products: Product[]
  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.getProductDetails()
    this.getAll()
  }

  getProductDetails(){
    this.productService.getProductDetails().subscribe(response=>{
      this.productDetailDTOs = response.data
    })
  }

  getAll(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
    })
  }

  getByIdFromInMemory(id:number):Product{
    return this.products.filter(p=>p.productId === id)[0]
  }
}
