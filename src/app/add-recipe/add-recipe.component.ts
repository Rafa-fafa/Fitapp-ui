import {Component, OnInit} from '@angular/core';
import {Address} from "../model/address";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  get portions() {
    const portions: number[] = [];
    for (let i = 1; i < 16; i++) {
      portions.push(i);
    }
    return portions;
  }

}
