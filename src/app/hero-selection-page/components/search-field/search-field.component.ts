import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {

  @Output() OnHeroSearch = new EventEmitter();
  public recentSearches: string[] = [];

  public searchHero(name: string) {
    this.OnHeroSearch.emit(name);
  }
}
