import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';
import { cls } from '../../../utils/cls';
@Component({
  selector: 'app-select-service-type',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule],
  templateUrl: './select-service-type.component.html',
  styleUrl: './select-service-type.component.css',
})
export class SelectServiceTypeComponent {
  selectedType: string | undefined = undefined;
  @Output() handleTypeSelected = new EventEmitter<string>();

  handleClick = (id: string) => {
    if (this.selectedType === id) {
      this.selectedType = undefined;
      this.handleTypeSelected.emit(undefined);
    } else {
      this.selectedType = id;
      this.handleTypeSelected.emit(id);
    }
  };

  getSelectClasses(id: string) {
    return cls(
      'relative rounded-md flex flex-1 justify-center flex-col items-center p-3',
      this.selectedType === id
        ? 'text-white bg-primary-darken-2'
        : 'bg-white text-primary-darken-2 ',
      this.selectedType === undefined && 'text-primary-darken-2'
    );
  }
}
