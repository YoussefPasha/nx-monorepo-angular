import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-link-footer',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule],
  templateUrl: './link-footer.component.html',
  styleUrl: './link-footer.component.css',
})
export class LinkFooterComponent {
  @Input() label = '';
}
