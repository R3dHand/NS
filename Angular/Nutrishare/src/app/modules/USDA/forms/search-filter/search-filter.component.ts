import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodSearchCriteriaModel } from '../../models/Search/FoodSearchCriteriaModel';
import { UsdaSearchService } from '../../services/search/usda-search.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})

export class SearchFilterComponent implements OnInit {
  hidden: boolean = true;
  foodSearchCriteria: FoodSearchCriteriaModel;
  searchFilterToggle: boolean;

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
  constructor(private usdaSearchService: UsdaSearchService) { }

  ngOnInit(): void {
    this.initSubscriptions();
  }

  initSubscriptions() {
    this.usdaSearchService.searchFilterToggleSubject.subscribe(response => {
      this.searchFilterToggle = response;
    });

    this.usdaSearchService.foodSearchCriteriaSubject.subscribe(response => {
      this.foodSearchCriteria = response;
    });
    
    this.filterFormGroup.get("selectedDataTypes").valueChanges.subscribe(value => {
      debugger
      this.foodSearchCriteria.selectedDataTypes = value;
    })
    this.filterFormGroup.get("pageSize").valueChanges.subscribe(value => {
      debugger
      this.foodSearchCriteria.pageSize = value;
    })
    this.filterFormGroup.get("pageNumber").valueChanges.subscribe(value => {
      debugger
      this.foodSearchCriteria.pageNumber = value;
    })
    this.filterFormGroup.get("selectedSortBy").valueChanges.subscribe(value => {
      debugger
      this.foodSearchCriteria.selectedSortBy = value;
    })
    this.filterFormGroup.get("selectedSortOrder").valueChanges.subscribe(value => {
      debugger
      this.foodSearchCriteria.selectedSortOrder = value;
    })
    this.filterFormGroup.get("brandOwner").valueChanges.subscribe(value => {
      debugger
      this.foodSearchCriteria.brandOwner = value;
    })
    this.filterFormGroup.get("selectedTradeChannels").valueChanges.subscribe(value => {
      debugger
      this.foodSearchCriteria.selectedTradeChannels = value;
    })
    this.filterFormGroup.get("startDate").valueChanges.subscribe(value => {
      debugger
      this.foodSearchCriteria.startDate = value;
    })
    this.filterFormGroup.get("endDate").valueChanges.subscribe(value => {
      debugger
      this.foodSearchCriteria.endDate = value;
    })
  }
}
