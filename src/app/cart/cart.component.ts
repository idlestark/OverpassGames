import { Game } from './../game-list/Game';
import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$!: Observable<Game[]>;
  constructor(private cart: GameCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
  ngOnInit(): void {
  }

}
