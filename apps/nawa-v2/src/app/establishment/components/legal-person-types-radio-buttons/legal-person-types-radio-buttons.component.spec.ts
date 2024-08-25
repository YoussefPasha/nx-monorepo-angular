import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegalPersonTypesRadioButtonsComponent } from './legal-person-types-radio-buttons.component';

describe('LegalPersonTypesRadioButtonsComponent', () => {
  let component: LegalPersonTypesRadioButtonsComponent;
  let fixture: ComponentFixture<LegalPersonTypesRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalPersonTypesRadioButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalPersonTypesRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
