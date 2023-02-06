import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductImage } from '../models/entities/productImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {
  
  apiUrl = 'https://localhost:44363/api/productImages/';

  constructor(private httpClient: HttpClient) {}

  add(file:any):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", file)
  }


  delete(image: ProductImage):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "delete", image)
  }

  getProductImagesByProductId(productId:number):Observable<ListResponseModel<ProductImage>>{
    let newPath = this.apiUrl + "getbyproductid?productId=" + productId;
    return this.httpClient.get<ListResponseModel<ProductImage>>(newPath)
  }
}
