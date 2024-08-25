import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CivilAssociationComponent } from './civil-association.component';

describe('CivilAssociationComponent', () => {
  let component: CivilAssociationComponent;
  let fixture: ComponentFixture<CivilAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivilAssociationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CivilAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
