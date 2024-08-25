import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyControlPanelBoxComponent } from './empty-control-panel-box.component';

describe('EmptyControlPanelBoxComponent', () => {
  let component: EmptyControlPanelBoxComponent;
  let fixture: ComponentFixture<EmptyControlPanelBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyControlPanelBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyControlPanelBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
