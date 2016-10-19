import { CellState } from './cell-state.enum';

export class GameModel {
    cell: CellState[][];
    moveCount: number;
    dimension: number;
    currentPlayer: CellState;
    winner: CellState;

    constructor(dimension: number) {
        this.dimension = dimension;

        this.cell = [];
        for (let y = 0; y < this.dimension; y++) {
            this.cell[y] = [];
        }
    }

    start() {
        for (let y = 0; y < this.dimension; y++) {
            for (let x = 0; x < this.dimension; x++) {
                this.cell[y][x] = CellState.Neither;
            }
        }

        this.winner = undefined;
        this.currentPlayer = CellState.Naught;
        this.moveCount = 0;
    }

    playCell(x: number, y: number) {
        // The game is over, so no more moves are allowed
        if (this.winner !== undefined) {
            return;
        }

        if (this.cell[y][x] !== CellState.Neither) {
            return;
        }

        this.cell[y][x] = this.currentPlayer;
        this.moveCount++;

        this.winner = this.checkGameOver(x, y, this.currentPlayer);
        if (this.winner === undefined) {
            this.changePlayer();
        }
    }

    checkGameOver(x: number, y: number, s: CellState): CellState {
        // check col
        for (let i = 0; i < this.dimension; i++) {
            if (this.cell[i][x] !== s) {
                break;
            }
            if (i === this.dimension - 1) {
                // report win for s
                return s;
            }
        }

        // check row
        for (let i = 0; i < this.dimension; i++) {
            if (this.cell[y][i] !== s) {
                break;
            }
            if (i === this.dimension - 1) {
                // report win for s
                return s;
            }
        }

        // check diag
        if (x === y) {
            // we're on a diagonal
            for (let i = 0; i < this.dimension; i++) {
                if (this.cell[i][i] !== s) {
                    break;
                }
                if (i === this.dimension - 1) {
                    // report win for s
                    return s;
                }
            }
        } else if (x + y === this.dimension - 1) {
            // check anti diag (thanks rampion)
            for (let i = 0; i < this.dimension; i++) {
                if (this.cell[(this.dimension - 1) - i][i] !== s) {
                    break;
                }
                if (i === this.dimension - 1) {
                    // report win for s
                    return s;
                }
            }
        }

        // check draw
        if (this.moveCount === this.dimension ** 2) {
            // report draw
            return CellState.Neither;
        }

        return undefined;
    }

    changePlayer() {
        this.currentPlayer = this.currentPlayer === CellState.Naught ? CellState.Cross : CellState.Naught;
    }
}
