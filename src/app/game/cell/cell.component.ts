import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

import { CellState } from '../cell-state.enum';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit, OnChanges {

  public CellState = CellState;

  @Input() state: CellState;

  @Output()
  cellClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        let changedProp = changes[propName];
        let previousValue = changedProp.previousValue;
        let currentValue = changedProp.currentValue;
        console.log('changed ' + previousValue + ' to '  + currentValue);
      }
    }
  }

  onClicked(event) {
    this.cellClicked.emit(null);
  }
}
