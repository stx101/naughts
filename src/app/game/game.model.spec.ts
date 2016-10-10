/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GameModel } from './game.model';

describe('Model', () => {
  it('should create an instance', () => {
    expect(true).toBeFalsy();
    expect(new GameModel(3, 3)).toBeTruthy();
  });
});
