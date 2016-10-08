import { CellState } from './cell-state.enum';

export class GameModel {
    cell: CellState[][];
    currentPlayer: number;

    constructor() {
        this.cell = [];

        for (let y = 0; y < 3; y++) {
            this.cell[y] = [];
        }
    }

    start() {
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                this.cell[y][x] = CellState.Free;
            }
        }

        this.currentPlayer = 0;
    }

    playCell(x: number, y: number) {
        if (this.cell[y][x] === CellState.Free) {
            this.cell[y][x] = this.currentPlayer === 0 ? CellState.Naught : CellState.Cross;
            this.currentPlayer ^= 1;
        }
    }
}
