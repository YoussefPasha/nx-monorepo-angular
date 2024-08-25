import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyEntitiesComponent } from './my-entities.component';

describe('MyEntitiesComponent', () => {
  let component: MyEntitiesComponent;
  let fixture: ComponentFixture<MyEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyEntitiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
