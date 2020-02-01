import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  units: string[] = ['ml','kg','g'];

  constructor() { }

  ngOnInit() {
  }

  addNewIngredient() {
    console.log("ssssssss")
  }
}
