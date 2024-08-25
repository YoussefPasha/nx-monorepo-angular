import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from '../../../shared/components/subtitle/subtitle.component';
import { ApplicantRadioButtonsComponent } from '../applicant-radio-buttons/applicant-radio-buttons.component';
import { ApplicantPositionsRadioButtonsComponent } from '../applicant-positions-radio-buttons/applicant-positions-radio-buttons.component';
import { ApplicantAttributeRadioButtonsComponent } from '../applicant-attribute-radio-buttons/applicant-attribute-radio-buttons.component';
import { LegalPersonTypesRadioButtonsComponent } from '../legal-person-types-radio-buttons/legal-person-types-radio-buttons.component';
import { NgxTranslateModule } from '../../../translate/translate.module';
import { DropFileUploadComponent } from '../../../shared/components/drop-file-upload/drop-file-upload.component';
import { EstablishmentHomeBtnComponent } from '../establishment-home-btn/establishment-home-btn.component';

@Component({
  selector: 'app-civil-institution',
  standalone: true,
  imports: [
    CommonModule,
    SubtitleComponent,
    ApplicantRadioButtonsComponent,
    ApplicantPositionsRadioButtonsComponent,
    ApplicantAttributeRadioButtonsComponent,
    LegalPersonTypesRadioButtonsComponent,
    NgxTranslateModule,
    DropFileUploadComponent,
    EstablishmentHomeBtnComponent,
  ],
  templateUrl: './civil-institution.component.html',
  styleUrl: './civil-institution.component.css',
})
export class CivilInstitutionComponent {
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
    console.log(id);

    this.selectedType = id;
  }
}
