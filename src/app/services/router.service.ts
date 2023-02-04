import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }

  productsPageByCategoryId(categoryId:number){
    if (categoryId>0) this.router.navigate(["products/category/" + categoryId])
  }

  registerPage(){
    this.router.navigate(["register"])
  }

  loginPage(){
    this.router.navigate(["login"])
  }

  homePage(){
    this.router.navigate([""])
  }

  profilePage(){ 
    this.router.navigate(["profile"])
  }
}
