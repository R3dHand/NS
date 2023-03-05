import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResultModel } from '../../models/Search/SearchResultModel';
import { FoodSearchCriteriaModel } from '../../models/Search/FoodSearchCriteriaModel';
import { BehaviorSubject } from 'rxjs';
import { ApiResult } from 'src/app/shared/DTO/ApiResult/api-result.model';

@Injectable({
  providedIn: 'root'
})
export class UsdaSearchService {
  apiUrl = `https://localhost:4201/Foods/search`;
  
  searchResult: SearchResultModel;
  searchResultSubject: BehaviorSubject<SearchResultModel>;

  foodSearchCriteria = {query: ''} as FoodSearchCriteriaModel;
  foodSearchCriteriaSubject: BehaviorSubject<FoodSearchCriteriaModel>;

  searchFilterToggle: boolean = true;
  searchFilterToggleSubject: BehaviorSubject<boolean>;

  constructor(private httpClient: HttpClient) {
    this.searchResultSubject = new BehaviorSubject(this.searchResult)
    this.foodSearchCriteriaSubject = new BehaviorSubject(this.foodSearchCriteria)
    this.searchFilterToggleSubject = new BehaviorSubject(this.searchFilterToggle)
  }

  search(foodSearchCriteria: FoodSearchCriteriaModel){
    debugger
    response: ApiResult;
    this.httpClient.post<ApiResult>(`${this.apiUrl}`, foodSearchCriteria).subscribe(response => {
      if (response.success) {
        this.searchResultSubject.next(response.result);
      }
    });
  }

  setSearchFilterToggle(searchFilterToggle: boolean) {
    this.searchFilterToggleSubject.next(searchFilterToggle)
  }
}
