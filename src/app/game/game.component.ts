import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  
  constructor() { }
  
  onIntervalFired(firedNumber: number){
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
  
}
