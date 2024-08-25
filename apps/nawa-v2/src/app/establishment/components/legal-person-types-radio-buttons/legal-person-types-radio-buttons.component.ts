import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalRadioButtonsComponent } from '../../../shared/components/vertical-radio-buttons/vertical-radio-buttons.component';

@Component({
  selector: 'app-legal-person-types-radio-buttons',
  standalone: true,
  imports: [CommonModule, VerticalRadioButtonsComponent],
  templateUrl: './legal-person-types-radio-buttons.component.html',
  styleUrl: './legal-person-types-radio-buttons.component.css',
})
export class LegalPersonTypesRadioButtonsComponent {
  selections = [
    {
      id: 'legal-type1',
      title: 'establishment.governmental_title',
      details: 'establishment.government_details',
    },
    {
      id: 'legal-type2',
      title: 'establishment.non_governmental_title',
    },
  ];
}
