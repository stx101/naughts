import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GameComponent,
    BoardComponent,
    CellComponent
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
