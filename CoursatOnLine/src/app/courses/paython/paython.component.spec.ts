import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaythonComponent } from './paython.component';

describe('PaythonComponent', () => {
  let component: PaythonComponent;
  let fixture: ComponentFixture<PaythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaythonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
