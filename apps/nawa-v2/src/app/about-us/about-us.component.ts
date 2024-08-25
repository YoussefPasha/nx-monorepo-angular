import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../translate/translate.module';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
