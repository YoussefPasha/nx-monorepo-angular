import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-entity-sub-card',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule, ButtonComponent],
  templateUrl: './entity-sub-card.component.html',
  styleUrl: './entity-sub-card.component.css',
})
export class EntitySubCardComponent {
  @Input() mainSubEntity = '';
  @Input() subSubEntity = '';
  @Input() button2Text = '';
}
