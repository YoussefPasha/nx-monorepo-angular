import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonsComponent } from '../../../shared/components/radio-buttons/radio-buttons.component';

@Component({
  selector: 'app-applicant-positions-radio-buttons',
  standalone: true,
  imports: [CommonModule, RadioButtonsComponent],
  templateUrl: './applicant-positions-radio-buttons.component.html',
  styleUrl: './applicant-positions-radio-buttons.component.css',
})
export class ApplicantPositionsRadioButtonsComponent {
  @Input() selections: {
    id: string;
    title: string;
    details?: string;
  }[] = [];
}
