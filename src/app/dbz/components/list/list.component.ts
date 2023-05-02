import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onDeleteCharacterEvt : EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList : Character[] = [];

  onDeleteCharacter(character:Character):void {
    this.onDeleteCharacterEvt.emit(character.id);
    console.log("Indice a ser eliminado:" + character);
  }

}
