import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  public character : Character = {id: '', name: '', power:0};

  @Output()
  public characterEmmiter: EventEmitter<Character> = new EventEmitter();

  emitCharacter() : void {
   // console.log(this.character);

   if (this.character.name.length === 0)
    return;

    this.characterEmmiter.emit({...this.character});

    this.clearCharacter();
  }

  clearCharacter(): void {
    this.character.name = '';
    this.character.power = 0;
  }
}
