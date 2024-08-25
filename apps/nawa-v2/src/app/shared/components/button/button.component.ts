import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() type = 'primary';
  @Input() title = '';
}
