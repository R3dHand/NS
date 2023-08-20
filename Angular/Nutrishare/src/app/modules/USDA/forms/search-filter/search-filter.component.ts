import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodSearchCriteriaModel } from '../../models/Search/FoodSearchCriteriaModel';
import { UsdaSearchService } from '../../services/search/usda-search.service';
import { UsdaStoreService } from '../../ComponentStore/services/usda-store.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})

export class SearchFilterComponent implements OnInit {
  hidden: boolean = true;
  searchFilterToggle: boolean;

    // selectors
  foodSearchCriteria: FoodSearchCriteriaModel;
  foodSearchCriteria$ = this.usdaStoreService.foodSearchCriteria$.subscribe(res => {
    this.foodSearchCriteria = res;
  });

  filterFormGroup = new FormGroup({
    selectedDataTypes: new FormControl<string[]>([]),
    pageSize: new FormControl<number>(25, [Validators.min(1), Validators.max(200)]),
    pageNumber: new FormControl<number>(null),
    selectedSortBy: new FormControl<string>(null),
    selectedSortOrder: new FormControl<string>(null),
    brandOwner: new FormControl<string>(null),
    selectedTradeChannels: new FormControl<string>(null),
    startDate: new FormControl<Date>(null),
    endDate: new FormControl<Date>(null)
  });

  dataTypes: string[] = [
    'Branded',
    'Foundation',
    'Survey (FNDDS)',
    'SR Legacy'
  ]
  sortBy: string[] = [
    '',
    'dataType.keyword',
    'lowercaseDescription.keyword',
    'fdcid',
    'publishedDate'
  ]
  sortOrder: string[] = [
    'asc',
    'desc'
  ]
  tradeChannels: string[] = [
    'CHILD_NUTRITION_FOOD_PROGRAMS',
    'DRUG',
    'FOOD_SERVICE',
    'GROCERY',
    'MASS_MERCHANDISING',
    'MILITARY',
    'ONLINE',
    'VENDING'
  ]
  constructor(
    private usdaSearchService: UsdaSearchService,
    private usdaStoreService: UsdaStoreService
  ) {

  }

  ngOnInit(): void {
    this.initSubscriptions();
  }

  initSubscriptions() {
    this.filterFormGroup.get("selectedDataTypes").valueChanges.subscribe(value => {
      this.foodSearchCriteria.selectedDataTypes = value;
      this.usdaStoreService.updateFoodSearchCriteria(this.foodSearchCriteria);
    })
    this.filterFormGroup.get("pageSize").valueChanges.subscribe(value => {
      this.foodSearchCriteria.pageSize = value;
      this.usdaStoreService.updateFoodSearchCriteria(this.foodSearchCriteria);
    })
    this.filterFormGroup.get("pageNumber").valueChanges.subscribe(value => {
      this.foodSearchCriteria.pageNumber = value;
      this.usdaStoreService.updateFoodSearchCriteria(this.foodSearchCriteria);
    })
    this.filterFormGroup.get("selectedSortBy").valueChanges.subscribe(value => {
      this.foodSearchCriteria.selectedSortBy = value;
      this.usdaStoreService.updateFoodSearchCriteria(this.foodSearchCriteria);
    })
    this.filterFormGroup.get("selectedSortOrder").valueChanges.subscribe(value => {
      this.foodSearchCriteria.selectedSortOrder = value;
      this.usdaStoreService.updateFoodSearchCriteria(this.foodSearchCriteria);
    })
    this.filterFormGroup.get("brandOwner").valueChanges.subscribe(value => {
      this.foodSearchCriteria.brandOwner = value;
      this.usdaStoreService.updateFoodSearchCriteria(this.foodSearchCriteria);
    })
    this.filterFormGroup.get("selectedTradeChannels").valueChanges.subscribe(value => {
      this.foodSearchCriteria.selectedTradeChannels = value;
      this.usdaStoreService.updateFoodSearchCriteria(this.foodSearchCriteria);
    })
    this.filterFormGroup.get("startDate").valueChanges.subscribe(value => {
      this.foodSearchCriteria.startDate = value;
      this.usdaStoreService.updateFoodSearchCriteria(this.foodSearchCriteria);
    })
    this.filterFormGroup.get("endDate").valueChanges.subscribe(value => {
      this.foodSearchCriteria.endDate = value;
      this.usdaStoreService.updateFoodSearchCriteria(this.foodSearchCriteria);
    })
  }
}
