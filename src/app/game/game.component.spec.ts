/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GameComponent } from './game.component';
import { GameModule } from './game.module';

describe('Component: Game', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
  });

  it('should create an instance', () => {
    let component = new GameComponent();
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(GameComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Naughts and Crosses');
  }));
});
