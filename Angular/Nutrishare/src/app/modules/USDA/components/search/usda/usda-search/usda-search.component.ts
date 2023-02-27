import { Component,  OnInit } from '@angular/core';
import { SearchResultModel } from 'src/app/modules/USDA/models/Search/SearchResultModel';
import { FoodSearchCriteriaModel } from 'src/app/modules/USDA/models/Search/FoodSearchCriteriaModel';
import { UsdaSearchService } from 'src/app/modules/USDA/services/search/usda-search.service';

@Component({
  selector: 'app-usda-search',
  templateUrl: './usda-search.component.html',
  styleUrls: ['./usda-search.component.scss']
})
export class UsdaSearchComponent implements OnInit {
  nutrientsDisplayedColumns: string[] = ['name', 'unit', 'value', 'source'];
  foodInputsDisplayedColumns: string[] = ['id','amount','foodDescription','ingredientCode','ingredientDescription','ingredientWeight','portionCode','portionDescription','sequenceNumber','surveyFlag','unit'];
  
  searchResult: SearchResultModel;
  foodSearchCriteria: FoodSearchCriteriaModel;

  constructor(private usdaSearchService: UsdaSearchService) {
  }

  ngOnInit() {
    this.usdaSearchService.searchResultSubject.subscribe(response => {
      this.searchResult = response;
    });
    this.usdaSearchService.foodSearchCriteriaSubject.subscribe(response => {
      this.foodSearchCriteria = response;
    });
  }
}
