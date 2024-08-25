import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cls } from '../../../utils/cls';

@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css',
})
export class MainButtonComponent {
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() buttonType: 'button' | 'submit' | 'reset' = 'button';
  @Input() fullWidth = false;
  @Input() fontSize: string | undefined;

  @Output() handleClick = new EventEmitter<void>();

  onClick(): void {
    this.handleClick.emit();
  }

  getStyle() {
    return cls(
      `rounded-md w-full py-4 text-[${this.fontSize}] font-medium`,
      this.type === 'secondary'
        ? this.fullWidth
          ? 'bg-transparent border-2 w-full border-primary text-primary hover:text-white hover:bg-primary-darken-2 disabled:bg-primary-lighten-1 disabled:border-primary'
          : 'bg-transparent border-2 max-w-64 w-full border-primary text-primary hover:text-white hover:bg-primary-darken-2 disabled:bg-primary-lighten-1 disabled:border-primary'
        : this.fullWidth
        ? 'bg-primary border-2 w-full border-primary text-black hover:bg-primary-darken-2 hover:text-white disabled:bg-secondary-lighten-1 disabled:border-secondary'
        : 'bg-primary border-2 max-w-64 w-full border-primary text-black hover:bg-primary-darken-2 hover:text-white disabled:bg-secondary-lighten-1 disabled:border-secondary'
    );
  }
}
