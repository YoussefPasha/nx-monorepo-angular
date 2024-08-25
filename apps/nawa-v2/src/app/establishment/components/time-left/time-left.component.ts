import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-time-left',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule],
  templateUrl: './time-left.component.html',
  styleUrl: './time-left.component.css',
})
export class TimeLeftComponent {
  @Input() min = 0;
  @Input() hour = 0;
  @Input() day = 0;
  @Input() minText = '';
  @Input() hourText = '';
  @Input() dayText = '';
  @Input() expiredText = '';
}
