import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderEstablishmentComponent } from './header-establishment.component';

describe('HeaderEstablishmentComponent', () => {
  let component: HeaderEstablishmentComponent;
  let fixture: ComponentFixture<HeaderEstablishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderEstablishmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
