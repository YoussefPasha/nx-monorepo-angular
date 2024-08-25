import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntitySubCardComponent } from './entity-sub-card.component';

describe('EntitySubCardComponent', () => {
  let component: EntitySubCardComponent;
  let fixture: ComponentFixture<EntitySubCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntitySubCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntitySubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
