import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonsComponent } from '../../../shared/components/radio-buttons/radio-buttons.component';

@Component({
  selector: 'app-applicant-radio-buttons',
  standalone: true,
  imports: [CommonModule, RadioButtonsComponent],
  templateUrl: './applicant-radio-buttons.component.html',
  styleUrl: './applicant-radio-buttons.component.css',
})
export class ApplicantRadioButtonsComponent {
  @Output() handleSelect = new EventEmitter<string>();

  handleSelectEvent(id: string) {
    this.handleSelect.emit(id);
  }

  selections = [
    {
      id: 'selection1',
      title: 'establishment.member_in_entity_title',
      details: 'establishment.member_in_entity_details',
    },
    {
      id: 'selection2',
      title: 'establishment.delegate_in_entity_title',
      details: 'establishment.delegate_in_entity_details',
    },
  ];
}
