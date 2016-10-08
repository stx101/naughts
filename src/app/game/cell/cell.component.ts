import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CellState } from '../cell-state.enum';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  public CellState = CellState;

  @Input() state: CellState;

  @Output()
  cellClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClicked(event) {
    this.cellClicked.emit(null);
  }
}
