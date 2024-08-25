import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-radio-buttons',
  standalone: true,
  imports: [CommonModule, RadioButtonComponent, NgxTranslateModule],
  templateUrl: './radio-buttons.component.html',
  styleUrl: './radio-buttons.component.css',
})
export class RadioButtonsComponent {
  @Output() handleSelect = new EventEmitter<string>();

  handleSelectEvent(id: string) {
    this.handleSelect.emit(id);
  }

  @Input() selections: {
    id: string;
    title: string;
    details?: string;
  }[] = [];
  @Input() name = '';
}
