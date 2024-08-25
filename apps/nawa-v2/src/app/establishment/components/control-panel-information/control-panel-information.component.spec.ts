import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlPanelInformationComponent } from './control-panel-information.component';

describe('ControlPanelInformationComponent', () => {
  let component: ControlPanelInformationComponent;
  let fixture: ComponentFixture<ControlPanelInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlPanelInformationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlPanelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
