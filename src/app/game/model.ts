import { State } from './state.enum';

export class Model {
    cell: State[][];
    currentPlayer: number;

    constructor() {
        this.cell = [];

        for (let i = 0; i < 3; i++) {
            this.cell[i] = [];
        }
    }

    start() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.cell[i][j] = State.Free;
            }
        }

        this.currentPlayer = 0;
    }

    cellClicked(x: number, y: number) {
        if (this.cell[x][y] === State.Free) {
            this.cell[x][y] = this.currentPlayer === 0 ? State.Naught : State.Cross;
            this.currentPlayer ^= 1;
        }
    }
}
