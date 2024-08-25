import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';
import { LinkFooterComponent } from '../../components/link-footer/link-footer.component';

@Component({
  selector: 'app-footer-establishment',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule, LinkFooterComponent],
  templateUrl: './footer-establishment.component.html',
  styleUrl: './footer-establishment.component.css',
})
export class FooterEstablishmentComponent {}
