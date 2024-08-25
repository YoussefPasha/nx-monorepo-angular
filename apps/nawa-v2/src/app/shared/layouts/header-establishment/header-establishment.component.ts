import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LinkHeaderComponent } from '../../components/link-header/link-header.component';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-header-establishment',
  standalone: true,
  imports: [CommonModule, RouterLink, LinkHeaderComponent, NgxTranslateModule],
  templateUrl: './header-establishment.component.html',
  styleUrl: './header-establishment.component.css',
})
export class HeaderEstablishmentComponent {}
