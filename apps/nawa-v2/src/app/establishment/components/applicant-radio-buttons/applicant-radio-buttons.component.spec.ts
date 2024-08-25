import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicantRadioButtonsComponent } from './applicant-radio-buttons.component';

describe('ApplicantRadioButtonsComponent', () => {
  let component: ApplicantRadioButtonsComponent;
  let fixture: ComponentFixture<ApplicantRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantRadioButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicantRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
