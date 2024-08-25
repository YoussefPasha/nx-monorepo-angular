import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cls } from '../../../utils/cls';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-link-header',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule],
  templateUrl: './link-header.component.html',
  styleUrl: './link-header.component.css',
})
export class LinkHeaderComponent {
  @Input() label = '';
  @Input() linkRouter = '';
  @Input() hasSpace = false;

  getDivClasses() {
    return cls('', this.hasSpace && 'w-[1px] h-5 opacity-25 bg-primary');
  }
}
