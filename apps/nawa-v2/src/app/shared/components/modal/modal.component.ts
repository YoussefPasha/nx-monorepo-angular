import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Output() handleModalClose = new EventEmitter<void>();
  @Input() title = '';
  @Input() type:
    | 'small-modal'
    | 'medium-modal'
    | 'large-modal'
    | 'extra-large-modal'
    | 'full-screen-modal' = 'medium-modal';
}
