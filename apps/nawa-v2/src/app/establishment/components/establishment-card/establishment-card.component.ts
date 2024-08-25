import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { TimeLeftComponent } from '../time-left/time-left.component';
import { MemberStatusComponent } from '../member-status/member-status.component';

@Component({
  selector: 'app-establishment-card',
  standalone: true,
  imports: [
    CommonModule,
    NgxTranslateModule,
    ButtonComponent,
    TimeLeftComponent,
    MemberStatusComponent,
  ],
  templateUrl: './establishment-card.component.html',
  styleUrl: './establishment-card.component.css',
})
export class EstablishmentCardComponent {
  @Input() orderText = '';
  @Input() orderNum = 0;
  @Input() sentText = '';
  @Input() sentDate = '';
  @Input() subMain = '';
  @Input() main = '';
  @Input() button1 = '';
  @Input() button2 = '';
  @Input() icon = '';
  @Input() timeLeftText = '';
  @Input() min = 0;
  @Input() hour = 0;
  @Input() day = 0;
  @Input() entityNameText = '';
  @Input() memberAcceptanceText = '';
  @Input() waiting = '';
  @Input() accepted = '';
  @Input() rejected = '';
  @Input() minText = '';
  @Input() hourText = '';
  @Input() dayText = '';
  @Input() entityName = '';
}
