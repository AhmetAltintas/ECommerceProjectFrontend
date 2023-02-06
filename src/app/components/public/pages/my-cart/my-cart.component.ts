import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/entities/cartItem';
import { Product } from 'src/app/models/entities/product';
import { CartService } from 'src/app/services/cart.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit{
  @Input() currentCartItemsFromParent: CartItem[]


  constructor(
    private cartService:CartService,
    private toastrService:ToastrService,
    private routerService:RouterService
  ){}

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.currentCartItemsFromParent = this.cartService.list();
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
    this.toastrService.error("Silindi",product.productName + "sepetten silindi.")
  }

  clearCart(){
    this.cartService.clearCart();
    this.routerService.homePage();
    this.toastrService.success("Sepet temizlendi.","Başarılı")
  }

  setCurrentCartItems(){
    this.currentCartItemsFromParent = this.cartService.list();
  }


}
