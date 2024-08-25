import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropFileUploadComponent } from './drop-file-upload.component';

describe('DropFileUploadComponent', () => {
  let component: DropFileUploadComponent;
  let fixture: ComponentFixture<DropFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropFileUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
