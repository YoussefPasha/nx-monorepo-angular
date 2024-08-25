import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropFileUploadComponent } from '../../../shared/components/drop-file-upload/drop-file-upload.component';
import { SubtitleComponent } from '../../../shared/components/subtitle/subtitle.component';
import { NgxTranslateModule } from '../../../translate/translate.module';
import { ApplicantAttributeRadioButtonsComponent } from '../applicant-attribute-radio-buttons/applicant-attribute-radio-buttons.component';
import { ApplicantPositionsRadioButtonsComponent } from '../applicant-positions-radio-buttons/applicant-positions-radio-buttons.component';
import { ApplicantRadioButtonsComponent } from '../applicant-radio-buttons/applicant-radio-buttons.component';
import { EstablishmentHomeBtnComponent } from '../establishment-home-btn/establishment-home-btn.component';
import { LegalPersonTypesRadioButtonsComponent } from '../legal-person-types-radio-buttons/legal-person-types-radio-buttons.component';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-civil-association',
  standalone: true,
  imports: [
    CommonModule,
    NgxTranslateModule,
    SubtitleComponent,
    ApplicantRadioButtonsComponent,
    ApplicantPositionsRadioButtonsComponent,
    DropFileUploadComponent,
    ApplicantAttributeRadioButtonsComponent,
    LegalPersonTypesRadioButtonsComponent,
    EstablishmentHomeBtnComponent,
    ModalComponent,
  ],
  templateUrl: './civil-association.component.html',
  styleUrl: './civil-association.component.css',
})
export class CivilAssociationComponent {
  selectedType = '';
  modalOpen = false;

  selections = [
    {
      id: 'position1',
      title: 'establishment.ceo_title',
      details: 'establishment.ceo_details',
    },
    {
      id: 'position2',
      title: 'establishment.vice_ceo_title',
      details: 'establishment.vice_ceo_details',
    },
    {
      id: 'position3',
      title: 'establishment.founder_member_title',
      details: 'establishment.founder_member_details',
    },
    {
      id: 'position4',
      title: 'establishment.member_title',
      details: 'establishment.member_details',
    },
  ];
  handleSelectEvent(id: string) {
    this.selectedType = id;
  }

  handleModalOpen() {
    this.modalOpen = true;
  }
  handleModalClose() {
    this.modalOpen = false;
  }
}
