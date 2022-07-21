import { TestBed } from '@angular/core/testing';

import { CategoryCoursesService } from './category-courses.service';

describe('CategoryCoursesService', () => {
  let service: CategoryCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
