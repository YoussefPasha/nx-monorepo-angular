import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlPanelWelcomeComponent } from './control-panel-welcome.component';

describe('ControlPanelWelcomeComponent', () => {
  let component: ControlPanelWelcomeComponent;
  let fixture: ComponentFixture<ControlPanelWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlPanelWelcomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlPanelWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
