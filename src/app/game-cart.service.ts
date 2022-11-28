import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game-list/Game';

@Injectable({
  providedIn: 'root'
})
export class GameCartService {

  constructor() { }

  private _cartList: Game[] = [];

  cartList: BehaviorSubject<Game[]> = new BehaviorSubject(this._cartList);

  addToCart(game: Game){
    let item = this._cartList.find((v1) => v1.name == game.name);
  if(!item){
    this._cartList.push({... game});
  }else{
    item.quantity += game.quantity;
  }
  console.log(this._cartList);
  this.cartList.next(this._cartList);
  }

}
