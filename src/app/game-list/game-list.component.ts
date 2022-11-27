import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})


export class GameListComponent {

  game = {
    "name" : "Call of Duty: Modern Warfare 2",
    "genre" : "Acción, Disparos en primera persona",
    "platform": "PC, PS5, XBOXSX",
    "price" : "8000$",
    "image": "assets/img/cod.jpeg"
  }

  game2 = {
    "name" : "Elden Ring",
    "genre" : "Acción, Aventura, RPG",
    "platform": "PC, PS5, XBOXSX",
    "price" : "7000$",
    "image": "assets/img/eldenring.jpeg"
  }

  game3 = {
    "name" : "Risk Of Rain 2",
    "genre" : "Acción, Rogue-Like",
    "platform": "PC, PS5",
    "price" : "1400$",
    "image": "assets/img/ror2.jpeg"
  }
}
