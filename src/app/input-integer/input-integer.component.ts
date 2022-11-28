import { Game } from './../game-list/Game';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent {

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  upQuantity(): void{
    if(this.quantity < this.max){
    this.quantity++;
    this.quantityChange.emit(this.quantity)}
    else{
      this.maxReached.emit("Se alcanzó el máximo de stock disponible");
    }
  }


  downQuantity(): void{
    if(this.quantity > 0)
    this.quantity--;
    this.quantityChange.emit(this.quantity)
  }

  ChangeQuantity(event): void{
    console.log(event.key);
    this.quantityChange.emit
  }

}
