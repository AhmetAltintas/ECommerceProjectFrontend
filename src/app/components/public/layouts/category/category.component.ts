import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/entities/category';
import { CategoryService } from 'src/app/services/category.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  categories: Category[];
  currentCategoryId: number
  constructor(
    private categoryService:CategoryService,
    private routerService:RouterService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getAll();

    this.activatedRoute.params.subscribe(params=>{
      this.currentCategoryId=params["categoryId"]
    })
  }
  
  getAll(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data
    })
  }

  routeToProductsPageByCategoryId(){
    this.routerService.productsPageByCategoryId(this.currentCategoryId)
  }
}
