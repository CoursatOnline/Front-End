import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvcComponent } from './mvc.component';

describe('MvcComponent', () => {
  let component: MvcComponent;
  let fixture: ComponentFixture<MvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
