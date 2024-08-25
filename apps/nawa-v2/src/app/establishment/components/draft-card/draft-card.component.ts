import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-draft-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, NgxTranslateModule],
  templateUrl: './draft-card.component.html',
  styleUrl: './draft-card.component.css',
})
export class DraftCardComponent {
  @Input() orderText = '';
  @Input() orderNum = '';
  @Input() sentText = '';
  @Input() sentDate = '';
  @Input() subMain = '';
  @Input() main = '';
  @Input() button1 = '';
  @Input() button2 = '';
  @Input() icon = '';
}
