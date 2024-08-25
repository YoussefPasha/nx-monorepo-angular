import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SubtitleComponent } from '../../shared/components/subtitle/subtitle.component';
import { NgxTranslateModule } from '../../translate/translate.module';
import { CivilAssociationComponent } from '../components/civil-association/civil-association.component';
import { CivilInstitutionComponent } from '../components/civil-institution/civil-institution.component';
import { FamilyBoxComponent } from '../components/family-box/family-box.component';
import { SelectServiceTypeComponent } from '../components/select-service-type/select-service-type.component';

@Component({
  selector: 'app-establishment-home',
  standalone: true,
  imports: [
    CommonModule,
    NgxTranslateModule,
    SubtitleComponent,
    SelectServiceTypeComponent,
    CivilAssociationComponent,
    CivilInstitutionComponent,
    FamilyBoxComponent,
  ],
  templateUrl: './establishment-home.component.html',
  styleUrl: './establishment-home.component.css',
})
export class EstablishmentHomeComponent {
  selectedType: string | undefined = undefined;

  handleTypeSelected(selectedType: string) {
    this.selectedType = selectedType;
  }
}
