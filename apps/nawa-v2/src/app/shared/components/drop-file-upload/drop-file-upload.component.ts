import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-drop-file-upload',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule],
  templateUrl: './drop-file-upload.component.html',
  styleUrl: './drop-file-upload.component.css',
})
export class DropFileUploadComponent {
  @Input() title = '';
  @Input() note = '';
}
