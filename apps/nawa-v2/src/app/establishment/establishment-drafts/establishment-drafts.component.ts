import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../translate/translate.module';
import { ControlPanelInformationComponent } from '../components/control-panel-information/control-panel-information.component';

@Component({
  selector: 'app-establishment-drafts',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule, ControlPanelInformationComponent],
  templateUrl: './establishment-drafts.component.html',
  styleUrl: './establishment-drafts.component.css',
})
export class EstablishmentDraftsComponent {}
