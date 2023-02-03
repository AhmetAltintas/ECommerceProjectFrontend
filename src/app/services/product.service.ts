import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/entities/product';
import { ResponseModel } from '../models/responseModel';
import { ProductDetailDto } from '../models/entities/dtos/productDetailDto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44363/api/';

  constructor(private httpClient: HttpClient) {}

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "products/add", product)
  }

  getProductDetails(): Observable<ListResponseModel<ProductDetailDto>> {
    let newPath = this.apiUrl + "products/getproductDetails";
    return this.httpClient.get<ListResponseModel<ProductDetailDto>>(newPath);
  }

  getProductDetailsByCategory(categoryId: number): Observable<ListResponseModel<ProductDetailDto>> {
    let newPath = this.apiUrl + 'products/getdetailsbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<ProductDetailDto>>(newPath);
  }
}
