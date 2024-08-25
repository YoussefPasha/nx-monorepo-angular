import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxTranslateModule } from './translate/translate.module';
import { initFlowbite } from 'flowbite';

@Component({
  standalone: true,
  imports: [RouterModule, NgxTranslateModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'nawa-v2';

  ngOnInit(): void {
    initFlowbite();
  }
}
