import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsNewRecipeComponent } from './ingredients-new-recipe.component';

describe('IngredientsComponent', () => {
  let component: IngredientsNewRecipeComponent;
  let fixture: ComponentFixture<IngredientsNewRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsNewRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsNewRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
