import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-control-panel-welcome',
  standalone: true,
  imports: [CommonModule, ButtonComponent, NgxTranslateModule],
  templateUrl: './control-panel-welcome.component.html',
  styleUrl: './control-panel-welcome.component.css',
})
export class ControlPanelWelcomeComponent {
  @Input() mainControlPanel = '';
  @Input() welcomePropName = '';
}
