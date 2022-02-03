import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {

  @Input() public set searchValueBasedOnRecentSearches(value: string) {
    this.searchInput.setValue(value);
  };
  @Output() public searchClick: EventEmitter<string> = new EventEmitter<string>();

  public searchInput: FormControl = new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]/)]);

  public searchHero(): void {
    this.searchClick.emit(this.searchInput.value);
    this.searchInput.setValue('');
  }

  public setSearchValueBasedOnSelectedChar(searchValue: string): void {
    this.searchInput.setValue(searchValue.toUpperCase());
  }
}
 