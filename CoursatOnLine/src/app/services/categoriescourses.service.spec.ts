import { TestBed } from '@angular/core/testing';

import { CategoriescoursesService } from './categoriescourses.service';

describe('CategoriescoursesService', () => {
  let service: CategoriescoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriescoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
