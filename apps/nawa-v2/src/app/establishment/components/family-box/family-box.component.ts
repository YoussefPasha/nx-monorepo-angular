import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from '../../../shared/components/subtitle/subtitle.component';
import { ApplicantRadioButtonsComponent } from '../applicant-radio-buttons/applicant-radio-buttons.component';
import { ApplicantPositionsRadioButtonsComponent } from '../applicant-positions-radio-buttons/applicant-positions-radio-buttons.component';
import { EstablishmentHomeBtnComponent } from '../establishment-home-btn/establishment-home-btn.component';

@Component({
  selector: 'app-family-box',
  standalone: true,
  imports: [
    CommonModule,
    SubtitleComponent,
    ApplicantRadioButtonsComponent,
    ApplicantPositionsRadioButtonsComponent,
    EstablishmentHomeBtnComponent,
  ],
  templateUrl: './family-box.component.html',
  styleUrl: './family-box.component.css',
})
export class FamilyBoxComponent {
  selectedType = '';

  selections = [
    {
      id: 'position1',
      title: 'establishment.ceo_title_in_institution',
    },
    {
      id: 'position2',
      title: 'establishment.vice_ceo_title_in_institution',
    },
    {
      id: 'position3',
      title: 'establishment.founder_member_title_in_institution',
    },
    {
      id: 'position4',
      title: 'establishment.member_title',
    },
  ];

  handleSelectEvent(id: string) {
    this.selectedType = id;
  }
}
