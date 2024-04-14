import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  private recipes: Recipe[];
   loadedRecipe: {
    id: string;
    title: string;
    imageUrl: string;
    contents: string[];
    origin: string;
}
 ;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
     console.log(this.loadedRecipe);
     console.log(this.recipes);
  }

  ionViewWillEnter(){
    console.log('ionviewwillEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }
  ionViewDidEnter() {
    console.log('Did Enter');
  }

  ionViewWillLeave() {
    console.log('ionviewwillLeave');
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
  ngonDestroy() {
    console.log('onDestroy');
  }

}
