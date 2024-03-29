import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/entities/cartItem';
import { Product } from 'src/app/models/entities/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit{

  cartItems:CartItem[]=[];
  currentCartItems:CartItem[];

  constructor(
    private cartService:CartService,
    private toastrService:ToastrService,
    ) { }

  ngOnInit(): void {
    this.getCart();
    this.setCurrentCartItems();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
    this.toastrService.error("Silindi",product.productName + "sepetten silindi.")
  }

  clearCart(){
    this.cartService.clearCart();
    this.toastrService.success("Sepet temizlendi.","Başarılı")
  }

  setCurrentCartItems(){
    this.currentCartItems = this.cartService.list();
  }
}
