import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {SideNavListComponent} from './side-nav-list/side-nav-list.component';
import {NewRecipeBodyComponent} from './new-recipe/new-recipe-body/new-recipe-body.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {IngredientsNewRecipeComponent} from './new-recipe/ingredients/ingredients-new-recipe.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {IngredientNewRecipeComponent} from './new-recipe/ingredients/ingredient/ingredient-new-recipe.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DownloadRecipeComponent} from './new-recipe/download-recipe/download-recipe.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {NewRecipeComponent} from './new-recipe/new-recipe.component';
import {AllRecipesComponent} from './all-recipes/all-recipes.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {AllRecipesListComponent} from './all-recipes/all-recipes-list/all-recipes-list.component';
import {RecipeResolverService} from "./resolver/recipe-resolver.service";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatTableModule} from "@angular/material/table";
import {ParagraphPipe} from './pipes/paragraph.pipe';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {SummaryListComponent} from './all-recipes/summary-list/summary-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";


const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'newRecipe',
    component: NewRecipeComponent
  },
  {
    path: 'allRecipes',
    component: AllRecipesComponent,
    resolve: {allRecipes: RecipeResolverService}
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideNavListComponent,
    NewRecipeBodyComponent,
    IngredientsNewRecipeComponent,
    IngredientNewRecipeComponent,
    DownloadRecipeComponent,
    NewRecipeComponent,
    AllRecipesComponent,
    AllRecipesListComponent,
    ParagraphPipe,
    SummaryListComponent,
    HomePageComponent,
    DeleteDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatGridListModule,
        MatButtonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatExpansionModule,
        RouterModule.forRoot(appRoutes, {enableTracing: false}),
        ScrollingModule,
        MatTableModule,
        MatCheckboxModule,
        MatDialogModule
    ],
  providers: [RecipeResolverService],
  bootstrap: [AppComponent],
  entryComponents: [DeleteDialogComponent]
})
export class AppModule {
}
