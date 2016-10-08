import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() model: Model;

  constructor() {
    this.model = new Model();
  }

  ngOnInit() {
    this.model.start();
  }
}
