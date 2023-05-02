import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({providedIn: 'root'})
export class DBZService {
  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(), name: 'Krillin', power: 1000
    },
    {
      id: uuid(), name: 'Goku', power: 9500
    },
    {
      id: uuid(), name: 'Vegetta', power: 7500
    }
  ];

  addNewCharacter(character: Character): void {
    // character.id = uuid();
    const newCharacter: Character = {...character, id:uuid()};
    this.characters.push(newCharacter);
  }

  deleteCharacterById(characterId: string): void {
    // const characterIndex : number = this.characters.map(c => c.id).indexOf(characterId);
    // this.characters.splice(characterIndex, 1);

    this.characters = this.characters.filter(character => character.id != characterId);
  }

}
