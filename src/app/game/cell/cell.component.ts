import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { State } from '../state.enum';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  public State = State;

  @Input()
  state: State;

  @Output()
  cellClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClicked(event) {
    this.cellClicked.emit(null);
  }
}
