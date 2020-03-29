import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipesListComponent } from './all-recipes-list.component';

describe('AllRecipesListComponent', () => {
  let component: AllRecipesListComponent;
  let fixture: ComponentFixture<AllRecipesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRecipesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
