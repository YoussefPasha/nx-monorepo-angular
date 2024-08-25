import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MainButtonComponent } from '../../../shared/components/main-button/main-button.component';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-establishment-home-btn',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule, MainButtonComponent],
  templateUrl: './establishment-home-btn.component.html',
  styleUrl: './establishment-home-btn.component.css',
})
export class EstablishmentHomeBtnComponent {
  @Output() handleClick = new EventEmitter<void>();

  onClick(): void {
    this.handleClick.emit();
  }
}
