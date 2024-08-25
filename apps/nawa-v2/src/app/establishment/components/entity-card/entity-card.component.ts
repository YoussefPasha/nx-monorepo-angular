import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-entity-card',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule, ButtonComponent],
  templateUrl: './entity-card.component.html',
  styleUrl: './entity-card.component.css',
})
export class EntityCardComponent {
  @Input() association = '';
  @Input() mainTitle = '';
  @Input() type = 1;
  @Input() text = '';
  @Input() min = '';
  @Input() hour = '';
  @Input() day = '';
  @Input() memberText = '';
  @Input() memberNum = '';
  @Input() minText = '';
  @Input() hourText = '';
  @Input() dayText = '';
  @Input() Button1Text = '';
  @Input() Button2Text = '';
  @Input() nationalNum = '';
}
