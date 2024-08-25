import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-tips-and-instructions-card',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule],
  templateUrl: './tips-and-instructions-card.component.html',
  styleUrl: './tips-and-instructions-card.component.css',
})
export class TipsAndInstructionsCardComponent {
  @Input() mainTitle = '';
  @Input() subTitle = '';
  @Input() paragraph = '';
}
