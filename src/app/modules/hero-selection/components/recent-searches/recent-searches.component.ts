import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentSearchesComponent {
  @Input() public recentSearches: string[] = [];
  @Output() public recentSearchesItemClick: EventEmitter<string> = new EventEmitter<string>();

  public handleRecentSearchesItemClick(searchValue: string): void {
    this.recentSearchesItemClick.emit(searchValue);
  }

  public trackBySearchedString(_: number, searchedString: string): string {
    return searchedString;
  }
}
