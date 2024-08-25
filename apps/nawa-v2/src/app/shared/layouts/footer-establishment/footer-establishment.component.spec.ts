import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterEstablishmentComponent } from './footer-establishment.component';

describe('FooterEstablishmentComponent', () => {
  let component: FooterEstablishmentComponent;
  let fixture: ComponentFixture<FooterEstablishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterEstablishmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
