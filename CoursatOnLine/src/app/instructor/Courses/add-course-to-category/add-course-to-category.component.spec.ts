import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseToCategoryComponent } from './add-course-to-category.component';

describe('AddCourseToCategoryComponent', () => {
  let component: AddCourseToCategoryComponent;
  let fixture: ComponentFixture<AddCourseToCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseToCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseToCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
