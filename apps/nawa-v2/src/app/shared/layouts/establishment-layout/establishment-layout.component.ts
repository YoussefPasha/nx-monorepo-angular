import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderEstablishmentComponent } from '../header-establishment/header-establishment.component';
import { FooterEstablishmentComponent } from '../footer-establishment/footer-establishment.component';

@Component({
  selector: 'app-establishment-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderEstablishmentComponent,
    FooterEstablishmentComponent,
  ],
  templateUrl: './establishment-layout.component.html',
  styleUrl: './establishment-layout.component.css',
})
export class EstablishmentLayoutComponent {}
