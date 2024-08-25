import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicantPositionsRadioButtonsComponent } from './applicant-positions-radio-buttons.component';

describe('ApplicantPositionsRadioButtonsComponent', () => {
  let component: ApplicantPositionsRadioButtonsComponent;
  let fixture: ComponentFixture<ApplicantPositionsRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantPositionsRadioButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicantPositionsRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
