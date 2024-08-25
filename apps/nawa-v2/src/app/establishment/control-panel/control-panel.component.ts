import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { NgxTranslateModule } from '../../translate/translate.module';
import { EmptyControlPanelBoxComponent } from '../components/empty-control-panel-box/empty-control-panel-box.component';
import { TipsAndInstructionsCardComponent } from '../components/tips-and-instructions-card/tips-and-instructions-card.component';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [
    CommonModule,
    NgxTranslateModule,
    ButtonComponent,
    EmptyControlPanelBoxComponent,
    ButtonComponent,
    TipsAndInstructionsCardComponent,
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css',
})
export class ControlPanelComponent {}
