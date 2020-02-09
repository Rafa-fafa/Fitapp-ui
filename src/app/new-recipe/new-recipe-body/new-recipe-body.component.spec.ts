import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipeBodyComponent } from './new-recipe-body.component';

describe('AddRecipeComponent', () => {
  let component: NewRecipeBodyComponent;
  let fixture: ComponentFixture<NewRecipeBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRecipeBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecipeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
