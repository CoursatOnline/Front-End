import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoginNavComponent } from './pre-login-nav.component';

describe('PreLoginNavComponent', () => {
  let component: PreLoginNavComponent;
  let fixture: ComponentFixture<PreLoginNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreLoginNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreLoginNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
