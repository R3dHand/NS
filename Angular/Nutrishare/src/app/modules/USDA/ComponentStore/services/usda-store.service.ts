import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentStore } from '@ngrx/component-store';
import { UsdaState } from 'src/app/modules/USDA/ComponentStore/interfaces/usda-state';
import { SearchResultFoodModel } from 'src/app/modules/USDA/models/Search/SearchResultFoodModel';
import { SearchResultModel } from '../../models/Search/SearchResultModel';
import { FoodSearchCriteriaModel } from '../../models/Search/FoodSearchCriteriaModel';
export const initialState = {
  foodSearchCriteria: {query: ''},
  toggleSearchFilter: true
} as UsdaState;

@Injectable({
  providedIn: 'root'
})
export class UsdaStoreService extends ComponentStore<UsdaState>{
  apiUrl = `https://localhost:4201/Foods/search`;
  // selectors
  searchResults$ = this.select(state => state.searchResult);
  foodSearchCriteria$ = this.select(state => state.foodSearchCriteria);
  toggleSearchFilter$ = this.select(state => state.toggleSearchFilter);

  foods$ = this.select(state => state.searchResult.foods);
  currentFdcId$ = this.select(state => state.currentFdcId);
  currentFood$ = this.select(
    this.foods$,
    this.currentFdcId$,
    (foods, fdcid) => foods.find(food => food.fdcId === fdcid)
  );

  constructor(private httpClient: HttpClient) {
    super(initialState);
  }

  updateUsdaState(searchResult: SearchResultModel){
    this.patchState({
      searchResult: searchResult
    });
  }

  updateFoodSearchCriteria(foodSearchCriteria: FoodSearchCriteriaModel){
    this.patchState({
      foodSearchCriteria: foodSearchCriteria
    });
  }


  updateSearchFilterToggle(toggleSearchFilter: boolean){
    debugger
    this.patchState({
      toggleSearchFilter: toggleSearchFilter
    });
  }
}
