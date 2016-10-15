import { Component, OnInit, Output } from '@angular/core';
import { GameModel } from './game.model';
import { CellState } from './cell-state.enum';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public CellState = CellState;

  @Output() gameModel: GameModel;

  constructor() {
    this.gameModel = new GameModel(3);
  }

  ngOnInit() {
    this.gameModel.start();
  }

}
