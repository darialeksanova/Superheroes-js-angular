import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

const ALPHABET_AS_STRING: string = "abcdefghijklmnopqrstuvwxyz";

@Component({
  selector: 'app-alphabet-selection',
  templateUrl: './alphabet-selection.component.html',
  styleUrls: ['./alphabet-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlphabetSelectionComponent {
  @Output() charOptionClick: EventEmitter<string> = new EventEmitter<string>();
  
  public readonly alphabetAsArray: string[] = ALPHABET_AS_STRING.split('');

  public changeSelectedChar(char: string): void {
    this.charOptionClick.emit(char);
  }
}
