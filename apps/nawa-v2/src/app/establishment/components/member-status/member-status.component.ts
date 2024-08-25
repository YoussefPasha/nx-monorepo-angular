import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-member-status',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule],
  templateUrl: './member-status.component.html',
  styleUrl: './member-status.component.css',
})
export class MemberStatusComponent {
  @Input() type = '';
  @Input() title = '';
}
