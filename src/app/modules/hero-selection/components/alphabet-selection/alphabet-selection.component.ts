import { Component, EventEmitter, Output } from '@angular/core';

const ALPHABET_AS_STRING: string = "abcdefghijklmnopqrstuvwxyz";

@Component({
  selector: 'app-alphabet-selection',
  templateUrl: './alphabet-selection.component.html',
  styleUrls: ['./alphabet-selection.component.scss']
})
export class AlphabetSelectionComponent {
  
  public alphabetAsArray: string[] = ALPHABET_AS_STRING.split('');
  @Output() charOptionClick: EventEmitter<string> = new EventEmitter<string>();

  public handleSelectedCharChange(char: string): void {
    this.charOptionClick.emit(char);
  }
}
