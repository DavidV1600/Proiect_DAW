import { TestBed } from '@angular/core/testing';

import { FoodTagService } from './food-tag.service';

describe('FoodTagService', () => {
  let service: FoodTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
