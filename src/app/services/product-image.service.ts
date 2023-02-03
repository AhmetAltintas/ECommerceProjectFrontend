import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductImage } from '../models/entities/productImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {
  
  apiUrl = 'https://localhost:44363/api/';

  constructor(private httpClient: HttpClient) {}

  add(){}


  delete(){}

  getProductImagesByProductId(productId:number):Observable<ListResponseModel<ProductImage>>{
    let newPath = this.apiUrl + "productImages/getbyproductid?productId=" + productId;
    return this.httpClient.get<ListResponseModel<ProductImage>>(newPath)
  }
}
