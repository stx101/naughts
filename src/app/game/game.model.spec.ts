/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GameModel } from './game.model';
import { CellState } from './cell-state.enum';

describe('Model', () => {
  it('should create an instance', () => {
    expect(new GameModel(3)).toBeTruthy();
  });

  describe('Game Started', () => {
    let model: GameModel;
    let dimension: number;

    beforeEach(() => {
      dimension = 3;
      model = new GameModel(dimension);
      model.start();
    });

    it('should have dimension squared cells', () => {
      let count = 0;
      model.cell.forEach((row) => {
        count += row.length;
      });
      expect(count).toEqual(dimension ** 2);
    });

    it('should initialize all cells', () => {
      let count = 0;
      model.cell.forEach((row) => {
        row.forEach((cell) => {
          if (cell === CellState.Neither) {
            count++;
          }
        });
      });
      expect(count).toEqual(dimension * dimension);
    });

    it('should not have a winner after 0 moves', () => {
      expect(model.winner).toBeUndefined();
    });

    it('should not have a winner after 4 moves', () => {
      model.playCell(0, 0);
      model.playCell(0, 1);
      model.playCell(1, 0);
      model.playCell(1, 1);
      expect(model.winner).toBeUndefined();
    });

    it('should be a win to naughts if 1st column filled', () => {
      model.playCell(0, 0);
      model.playCell(1, 0);
      model.playCell(0, 1);
      model.playCell(1, 1);
      model.playCell(0, 2);
      expect(model.winner).toBe(CellState.Naught);
    });

    it('should be a win to crosses if 1st column filled', () => {
      model.playCell(1, 0);
      model.playCell(0, 0);
      model.playCell(1, 1);
      model.playCell(0, 1);
      model.playCell(2, 2);
      model.playCell(0, 2);
      expect(model.winner).toBe(CellState.Cross);
    });

    it('should be a win to naughts if diagonal filled', () => {
      model.playCell(0, 0);
      model.playCell(0, 1);
      model.playCell(1, 1);
      model.playCell(0, 2);
      model.playCell(2, 2);
      expect(model.winner).toBe(CellState.Naught);
    });

    it('should be a win to naughts if anti-diagonal filled', () => {
      model.playCell(2, 0);
      model.playCell(0, 1);
      model.playCell(1, 1);
      model.playCell(1, 2);
      model.playCell(0, 2);
      expect(model.winner).toBe(CellState.Naught);
    });

    it('should be a draw when all cells played and no winner', () => {
      model.playCell(0, 0);
      model.playCell(1, 0);
      model.playCell(2, 0);
      model.playCell(1, 1);
      model.playCell(0, 1);
      model.playCell(0, 2);
      model.playCell(1, 2);
      model.playCell(2, 2);
      model.playCell(2, 1);
      expect(model.winner).toBe(CellState.Neither);
    });

  });
});
