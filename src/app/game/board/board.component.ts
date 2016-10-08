import { Component, OnInit, Input } from '@angular/core';
import { GameModel } from '../game.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() gameModel: GameModel;

  constructor() {
    this.gameModel = new GameModel();
  }

  ngOnInit() {
    this.gameModel.start();
  }

  cellClicked(x: number, y: number) {
    this.gameModel.playCell(x, y);
  }
}
