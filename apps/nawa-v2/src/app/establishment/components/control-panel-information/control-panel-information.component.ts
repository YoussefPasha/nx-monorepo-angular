import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';
import { DraftCardComponent } from '../draft-card/draft-card.component';

@Component({
  selector: 'app-control-panel-information',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule, DraftCardComponent],
  templateUrl: './control-panel-information.component.html',
  styleUrl: './control-panel-information.component.css',
})
export class ControlPanelInformationComponent {
  @Input() type = '';
  @Input() title = '';
  @Input() subTitle = '';
  @Input() boxName = '';
  @Input() placeholder = '';
  @Input() length = 0;
}
