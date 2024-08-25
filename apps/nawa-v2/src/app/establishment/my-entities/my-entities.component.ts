import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxTranslateModule } from '../../translate/translate.module';
import { ControlPanelInformationComponent } from '../components/control-panel-information/control-panel-information.component';
import { ControlPanelWelcomeComponent } from '../components/control-panel-welcome/control-panel-welcome.component';
import { DraftCardComponent } from '../components/draft-card/draft-card.component';
import { EntityCardComponent } from '../components/entity-card/entity-card.component';
import { EntitySubCardComponent } from '../components/entity-sub-card/entity-sub-card.component';
import { EstablishmentCardComponent } from '../components/establishment-card/establishment-card.component';
import { TipsAndInstructionsCardComponent } from '../components/tips-and-instructions-card/tips-and-instructions-card.component';

@Component({
  selector: 'app-my-entities',
  standalone: true,
  imports: [
    CommonModule,
    ControlPanelWelcomeComponent,
    ControlPanelInformationComponent,
    EntityCardComponent,
    DraftCardComponent,
    EstablishmentCardComponent,
    EntitySubCardComponent,
    NgxTranslateModule,
    TipsAndInstructionsCardComponent,
  ],
  templateUrl: './my-entities.component.html',
  styleUrl: './my-entities.component.css',
})
export class MyEntitiesComponent {}
