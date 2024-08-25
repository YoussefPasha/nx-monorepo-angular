import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectServiceTypeComponent } from './select-service-type.component';

describe('SelectServiceTypeComponent', () => {
  let component: SelectServiceTypeComponent;
  let fixture: ComponentFixture<SelectServiceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectServiceTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectServiceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
