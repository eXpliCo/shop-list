import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AddRecipePage } from '../pages/add-recipe/add-recipe';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { AddIngredientPage } from '../pages/add-ingredient/add-ingredient';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RecipeService } from '../services/recipe.service';
import { IngredientService } from '../services/ingredients.service';
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddRecipePage,
    ShoppingListPage,
    AddIngredientPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddRecipePage,
    ShoppingListPage,
    AddIngredientPage
  ],
  providers: [
    RecipeService,
    IngredientService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
