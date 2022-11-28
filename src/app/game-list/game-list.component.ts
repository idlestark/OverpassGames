import { GameDataService } from './../game-data.service';
import { GameCartService } from './../game-cart.service';
import { Component, OnInit } from '@angular/core';
import {Game} from './Game';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']

})

export class GameListComponent implements OnInit {

  games: Game[] = [];

  constructor(
    private cart: GameCartService,
    private gamesService: GameDataService){

  }

  addToCart(game): void{
    this.cart.addToCart(game);
    game.stock -= game.quantity;
    game.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }

  ngOnInit(): void {
      this.gamesService.getAll()
      .subscribe(games => this.games = games);
  }

}
