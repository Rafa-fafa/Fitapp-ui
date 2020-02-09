import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientNewRecipeComponent } from './ingredient-new-recipe.component';

describe('IngredientNewRecipeComponent', () => {
  let component: IngredientNewRecipeComponent;
  let fixture: ComponentFixture<IngredientNewRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientNewRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientNewRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
