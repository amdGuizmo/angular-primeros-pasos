import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    name: 'Ernesto',
    power: 34
  }

  addCharacter(): void{
    console.log(this.character);

    if(this.character.name.length !== 0){
      this.onNewCharacter.emit({...this.character});
    }

    this.character.name = '';
    this.character.power = 0;
  }

}

