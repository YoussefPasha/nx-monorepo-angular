import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamilyBoxComponent } from './family-box.component';

describe('FamilyBoxComponent', () => {
  let component: FamilyBoxComponent;
  let fixture: ComponentFixture<FamilyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FamilyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
