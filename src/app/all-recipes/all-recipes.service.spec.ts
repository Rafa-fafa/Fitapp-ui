import { TestBed } from '@angular/core/testing';

import { AllRecipesService } from './all-recipes.service';

describe('AllRecipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllRecipesService = TestBed.get(AllRecipesService);
    expect(service).toBeTruthy();
  });
});
