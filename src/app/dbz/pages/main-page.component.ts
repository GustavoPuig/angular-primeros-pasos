import { Component } from '@angular/core';
import { DBZService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor (private dbzService : DBZService) {}

  public get characters(): Character[] {
    return this.dbzService.characters;
  }

  public onNewCharacter(character:Character):void {
    this.dbzService.addNewCharacter(character);
  }

  public onDeleteCharacter(characterId: string):void {
    this.dbzService.deleteCharacterById(characterId);
  }

}
