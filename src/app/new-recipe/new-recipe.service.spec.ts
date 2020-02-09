import { TestBed } from '@angular/core/testing';

import { NewRecipeService } from './new-recipe.service';

describe('NewRecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewRecipeService = TestBed.get(NewRecipeService);
    expect(service).toBeTruthy();
  });
});
