import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-empty-control-panel-box',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule],
  templateUrl: './empty-control-panel-box.component.html',
  styleUrl: './empty-control-panel-box.component.css',
})
export class EmptyControlPanelBoxComponent {
  @Input() title = '';
  @Input() subTitle = '';
  @Input() mainText = '';
  @Input() boxName = '';
  @Input() type = '';
}
