import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_BATTLE_DATA } from 'src/app/constants/default-battle-data';
import { BattleData } from 'src/app/types/battle-data';

@Component({
  selector: 'app-battle-result-modal',
  templateUrl: './battle-result-modal.component.html',
  styleUrls: ['./battle-result-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattleResultModalComponent {
  @Input() public battleData: BattleData = DEFAULT_BATTLE_DATA;
  @Output() onModalClose: EventEmitter<void> = new EventEmitter();

  public closeModal(): void {
    this.onModalClose.emit();
  }
}
