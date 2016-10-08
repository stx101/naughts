import { CellState } from './cell-state.enum';

export class GameModel {
    cell: CellState[][];
    rows: number;
    columns: number;
    currentPlayer: number;

    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;

        this.cell = [];
        for (let y = 0; y < this.rows; y++) {
            this.cell[y] = [];
        }
    }

    start() {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
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
