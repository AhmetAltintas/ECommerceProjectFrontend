import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-common-child-component-base',
  templateUrl: './common-child-component-base.component.html',
  styleUrls: ['./common-child-component-base.component.css']
})
export class CommonChildComponentBaseComponent {
  @Input() classFromParent: string;
  @Input() innerHTML: string;

  constructor(public authService:AuthService){}
}
