import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 private recipes: Recipe[] =
  [
    {
      id: 'r1',
      title: 'cake',
// tslint:disable-next-line: max-line-length
      imageUrl: 'https://janinemakescakes.weebly.com/uploads/1/2/5/8/12589631/6069841_orig.jpg',
      contents: ['egg', 'milk', 'yeast'],
      origin: 'india',
    },
    {
      id: 'r2',
      title: 'icecream',
// tslint:disable-next-line: max-line-length
imageUrl: 'https://media.gettyimages.com/photos/ice-cream-composition-on-a-bowl-picture-id157472912?s=612x612',

      contents: ['roasted-almonds', 'milk', 'cream-essence'],
      origin: 'india',
    },
    {
      id: 'r3',
      title: 'Biryani',
// tslint:disable-next-line: max-line-length
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkV1w4xNnB7AiKM-GhEEozMLqNX__tU5RVO3l16vZlBXT8FN6VA',
      contents: ['BiryaniRice', 'Indian Masala', 'cream-essence', 'spices'],
      origin: 'india',
    },
    {
      id: 'r4',
      title: 'Noodles',
      imageUrl: 'https://paleoglutenfree.com/wp-content/uploads/2018/03/asian-garlic-noodles-2-of-8-686x1024.jpg',
      contents: ['SchezwanNoodles', 'Masala', 'cream-essence', 'toppings'],
      origin: 'india',
    },
    {
      id: 'r5',
      title: 'Momos',
// tslint:disable-next-line: max-line-length
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gRMbrIMas3GRK0DWehR7_910fDHoxYqX0aVHTwysMz9FOgJ7OQ',
      contents: ['Maida', 'milk', 'cream-essence', 'stuffed'],
      origin: 'india',
    }
  ];
  constructor() {}
  getAllRecipes() {
      return [...this.recipes];
    }
  getRecipe(recipeId: string ) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    }
    )
  };
}
 deleteRecipe(recipeId: string){
// tslint:disable-next-line: no-shadowed-variable
   this.recipes = this.recipes.filter(recipe => {
     return recipe.id !== recipeId;
   });
 }

}

