import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-vertical-radio-buttons',
  standalone: true,
  imports: [CommonModule, RadioButtonComponent, NgxTranslateModule],
  templateUrl: './vertical-radio-buttons.component.html',
  styleUrl: './vertical-radio-buttons.component.css',
})
export class VerticalRadioButtonsComponent {
  @Input() selections: {
    id: string;
    title: string;
    details?: string;
  }[] = [];
  @Input() name = '';
}
