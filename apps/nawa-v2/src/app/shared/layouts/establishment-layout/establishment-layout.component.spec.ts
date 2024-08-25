import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstablishmentLayoutComponent } from './establishment-layout.component';

describe('EstablishmentLayoutComponent', () => {
  let component: EstablishmentLayoutComponent;
  let fixture: ComponentFixture<EstablishmentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstablishmentLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EstablishmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
