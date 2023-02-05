import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { Category } from 'src/app/models/entities/category';
import { Product } from 'src/app/models/entities/product';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent extends AdminChildComponentBaseComponent implements OnInit{
  @Input() currentProductFromParent: Product;

  categories: Category[]

  updateFormGroup:FormGroup;
  constructor(
    private productService:ProductService,
    private formBuilder:FormBuilder,
    private categoryService:CategoryService,
    private toastrService:ToastrService,
    public override authService:AuthService
  ){
    super(authService)
    this.innerHTML = "Güncelle"
  }

  ngOnInit(): void {
    this.getCategories();
    this.createUpdateFormGroup();
  }

  createUpdateFormGroup() {
    this.updateFormGroup = this.formBuilder.group({
      categoryId: [this.currentProductFromParent.categoryId, Validators.required],
      productName: [this.currentProductFromParent.productName, Validators.required],
      unitPrice: [this.currentProductFromParent.unitPrice, Validators.required],
      unitsInStock: [this.currentProductFromParent.unitsInStock, Validators.required]
    })
  }

  update(){
    if (this.updateFormGroup.valid) {
      let product: Product = Object.assign(
        {id: this.currentProductFromParent.productId},
        this.updateFormGroup.value
      );
      this.productService.update(product).subscribe(response=>{
        this.toastrService.success(response.message);
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      }, errorResponse=>{
        this.toastrService.error(errorResponse.error.message);
      })
    } else this.toastrService.error(FormIsMissing)
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response=> {
      this.categories = response.data;
    })
  }
}
