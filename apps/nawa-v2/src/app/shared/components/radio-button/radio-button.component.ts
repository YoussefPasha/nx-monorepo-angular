import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cls } from '../../../utils/cls';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css',
})
export class RadioButtonComponent {
  @Input() id = '';
  @Input() name = '';
  @Input() style = '';
  @Output() handleSelect = new EventEmitter<string>();

  handleClick(id: string) {
    this.handleSelect.emit(id);
  }

  getRadioClasses() {
    return cls(
      `w-6 h-6 appearance-none bg-transparent m-0 text-current border border-gray checked:border-2 checked:border-primary rounded-full flex items-center justify-center
          before:contents-[''] before:w-[0.875rem] before:h-[0.875rem] after:translate-y-1/2 before:rounded-full before:checked:bg-primary`,
      this.style
    );
  }
}
