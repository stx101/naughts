import { Component, OnInit } from '@angular/core';
import { State } from '../state.enum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cell: State[][];
  currentPlayer: number;

  constructor() { }

  ngOnInit() {
    this.currentPlayer = 0;
    this.cell = [];

    for (let i = 0; i < 3; i++) {
      this.cell[i] = [];
      for (let j = 0; j < 3; j++) {
        this.cell[i][j] = State.Free;
      }
    }
  }

  cellClicked(x: number, y: number) {
    if (this.cell[x][y] === State.Free) {
      this.cell[x][y] = this.currentPlayer === 0 ? State.Naught : State.Cross;
      this.currentPlayer ^= 1;
    }
  }
}
