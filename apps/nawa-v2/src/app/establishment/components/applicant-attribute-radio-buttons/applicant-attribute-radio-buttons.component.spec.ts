import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicantAttributeRadioButtonsComponent } from './applicant-attribute-radio-buttons.component';

describe('ApplicantAttributeRadioButtonsComponent', () => {
  let component: ApplicantAttributeRadioButtonsComponent;
  let fixture: ComponentFixture<ApplicantAttributeRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantAttributeRadioButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicantAttributeRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
