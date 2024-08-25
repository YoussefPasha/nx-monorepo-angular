import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstablishmentHomeBtnComponent } from './establishment-home-btn.component';

describe('EstablishmentHomeBtnComponent', () => {
  let component: EstablishmentHomeBtnComponent;
  let fixture: ComponentFixture<EstablishmentHomeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstablishmentHomeBtnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EstablishmentHomeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
