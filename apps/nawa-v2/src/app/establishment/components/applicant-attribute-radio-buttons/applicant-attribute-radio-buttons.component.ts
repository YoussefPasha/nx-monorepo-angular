import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalRadioButtonsComponent } from '../../../shared/components/vertical-radio-buttons/vertical-radio-buttons.component';

@Component({
  selector: 'app-applicant-attribute-radio-buttons',
  standalone: true,
  imports: [CommonModule, VerticalRadioButtonsComponent],
  templateUrl: './applicant-attribute-radio-buttons.component.html',
  styleUrl: './applicant-attribute-radio-buttons.component.css',
})
export class ApplicantAttributeRadioButtonsComponent {
  selections = [
    {
      id: 'attribute1',
      title: 'establishment.natural_person_title',
      details: 'establishment.natural_person_details',
    },
    {
      id: 'attribute2',
      title: 'establishment.legal_person_title',
      details: 'establishment.legal_person_details',
    },
  ];
}
