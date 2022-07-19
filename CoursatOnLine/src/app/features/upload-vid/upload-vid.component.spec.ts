import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadVidComponent } from './upload-vid.component';

describe('UploadVidComponent', () => {
  let component: UploadVidComponent;
  let fixture: ComponentFixture<UploadVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadVidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
