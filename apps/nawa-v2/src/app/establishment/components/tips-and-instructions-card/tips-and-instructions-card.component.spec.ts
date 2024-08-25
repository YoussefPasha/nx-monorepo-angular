import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipsAndInstructionsCardComponent } from './tips-and-instructions-card.component';

describe('TipsAndInstructionsCardComponent', () => {
  let component: TipsAndInstructionsCardComponent;
  let fixture: ComponentFixture<TipsAndInstructionsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipsAndInstructionsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TipsAndInstructionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
