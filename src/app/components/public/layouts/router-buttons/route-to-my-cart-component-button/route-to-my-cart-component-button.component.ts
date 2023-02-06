import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/entities/cartItem';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { PublicChildComponentBaseComponent } from '../../../bases/public-child-component-base/public-child-component-base.component';

@Component({
  selector: 'app-route-to-my-cart-component-button',
  templateUrl: './route-to-my-cart-component-button.component.html',
  styleUrls: ['./route-to-my-cart-component-button.component.css']
})
export class RouteToMyCartComponentButtonComponent extends PublicChildComponentBaseComponent implements OnInit{
  @Input() currentCartItemsFromParent: CartItem[]

  constructor(
    private routerService:RouterService,
    public override authService:AuthService
  ){
    super(authService)
  }

  ngOnInit(): void {
      
  }

  routeToMyCartPage(){
    this.routerService.myCartPage();
  }
}
