import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstablishmentDraftsComponent } from './establishment-drafts.component';

describe('EstablishmentDraftsComponent', () => {
  let component: EstablishmentDraftsComponent;
  let fixture: ComponentFixture<EstablishmentDraftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstablishmentDraftsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EstablishmentDraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
