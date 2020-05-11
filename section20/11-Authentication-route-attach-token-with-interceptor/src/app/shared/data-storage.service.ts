
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';


@Injectable({ providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {

    }

    // when we are useing these two request, we need to inform the firebase thatwe are authenticated
    // so we have tp pass our authenticated token with them.
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();

        this.http
            .put('https://ng-recipe-book-ac37d.firebaseio.com/recipes.json', recipes)
            .subscribe(response => 
                {
                    console.log(response);
                });
    }

    fetchRecipes() {

        return this.authService.user.pipe(
                take(1), 
                exhaustMap(user => {
                    return this.http
                        .get<Recipe[]>(
                            'https://ng-recipe-book-ac37d.firebaseio.com/recipes.json',
                            {
                                params: new HttpParams().set('auth', user.token)
                            }
                        );
            }),
            map(recipes => {
                return recipes.map( recipe => {
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                });
            }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
        );
    }
}