import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-subtitle',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule],
  templateUrl: './subtitle.component.html',
  styleUrl: './subtitle.component.css',
})
export class SubtitleComponent {
  @Input() title = '';
  @Input() details = '';
}
