import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerticalRadioButtonsComponent } from './vertical-radio-buttons.component';

describe('VerticalRadioButtonsComponent', () => {
  let component: VerticalRadioButtonsComponent;
  let fixture: ComponentFixture<VerticalRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalRadioButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
