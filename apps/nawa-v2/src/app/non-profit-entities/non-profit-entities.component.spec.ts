import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NonProfitEntitiesComponent } from './non-profit-entities.component';

describe('NonProfitEntitiesComponent', () => {
  let component: NonProfitEntitiesComponent;
  let fixture: ComponentFixture<NonProfitEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonProfitEntitiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NonProfitEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
