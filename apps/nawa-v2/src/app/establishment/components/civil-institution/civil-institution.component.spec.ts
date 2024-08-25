import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CivilInstitutionComponent } from './civil-institution.component';

describe('CivilInstitutionComponent', () => {
  let component: CivilInstitutionComponent;
  let fixture: ComponentFixture<CivilInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivilInstitutionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CivilInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
