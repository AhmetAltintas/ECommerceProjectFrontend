import { Pipe, PipeTransform } from '@angular/core';
import { ProductDetailDto } from '../models/entities/dtos/productDetailDto';

@Pipe({
  name: 'productDetailFilter'
})
export class ProductDetailFilterPipe implements PipeTransform {

  transform(value: ProductDetailDto[], filterText: string): ProductDetailDto[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:ProductDetailDto)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }


}
