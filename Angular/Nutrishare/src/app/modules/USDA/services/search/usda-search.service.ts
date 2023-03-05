import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodSearchCriteriaModel } from '../../models/Search/FoodSearchCriteriaModel';
import { ApiResult } from 'src/app/shared/DTO/ApiResult/api-result.model';
import { UsdaStoreService } from '../../ComponentStore/services/usda-store.service';

@Injectable({
  providedIn: 'root'
})
export class UsdaSearchService {
  apiUrl = `https://localhost:4201/Foods/search`;

  constructor(
    private httpClient: HttpClient,
    private usdaStoreService: UsdaStoreService
  ) {
  }

  search(foodSearchCriteria: FoodSearchCriteriaModel){
    this.httpClient.post<ApiResult>(`${this.apiUrl}`, foodSearchCriteria).subscribe(response => {
      if (response.success) {
        this.usdaStoreService.updateUsdaState(response.result);
      }
    });
  }
}
