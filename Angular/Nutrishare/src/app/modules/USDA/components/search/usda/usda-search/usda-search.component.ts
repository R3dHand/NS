import { Component,  OnInit } from '@angular/core';
import { SearchResultModel } from 'src/app/modules/USDA/models/Search/SearchResultModel';
import { UsdaStoreService } from 'src/app/modules/USDA/ComponentStore/services/usda-store.service';
import { UsdaSearchService } from 'src/app/modules/USDA/services/search/usda-search.service';

@Component({
  selector: 'app-usda-search',
  templateUrl: './usda-search.component.html',
  styleUrls: ['./usda-search.component.scss']
})
export class UsdaSearchComponent implements OnInit {
  nutrientsDisplayedColumns: string[] = ['name', 'unit', 'value', 'source'];
  foodInputsDisplayedColumns: string[] = ['id','amount','foodDescription','ingredientCode','ingredientDescription','ingredientWeight','portionCode','portionDescription','sequenceNumber','surveyFlag','unit'];
  
  // selectors
  searchResult: SearchResultModel;
  searchResults$ = this.usdaStoreService.searchResults$.subscribe(res => {this.searchResult = res;});



  // foods$ = this.usdaStoreService.foods$.subscribe(res => {return res;});
  // currentFdcId$ = this.usdaStoreService.currentFdcId$.subscribe(res => {return res;});
  // currentFood$ = this.usdaStoreService.currentFood$.subscribe(res => {return res;});
  
  constructor(
    private usdaStoreService: UsdaStoreService,
    private usdaSearchService: UsdaSearchService
  ) {
  }

  ngOnInit() {
  }
}
