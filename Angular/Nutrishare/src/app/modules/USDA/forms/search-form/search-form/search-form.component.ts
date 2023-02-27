import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FoodSearchCriteriaModel } from '../../../models/Search/FoodSearchCriteriaModel';
import { UsdaSearchService } from '../../../services/search/usda-search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})

export class SearchFormComponent  {
  searchFilterToggle: boolean;

  foodSearchCriteria: FoodSearchCriteriaModel;

  searchFormGroup = new FormGroup({
    //try taking this out of formGroup
    query: new FormControl<string>('')
  });

  constructor(private usdaSearchService: UsdaSearchService) {
  }

  ngOnInit() {
    this.initSubscriptions();
  }

  initSubscriptions() {
    this.usdaSearchService.foodSearchCriteriaSubject.subscribe(response => {
      this.foodSearchCriteria = response;
    });
    this.searchFormGroup.get("query").valueChanges.subscribe(value => {
      this.foodSearchCriteria.query = value;
    })
    this.usdaSearchService.searchFilterToggleSubject.subscribe(value => {
      this.searchFilterToggle = value;
    })
  }
  search(searchForm) {
    this.usdaSearchService.search(this.foodSearchCriteria);
    this.usdaSearchService.setSearchFilterToggle(true);
  }

  toggleSearchFilter() {
    this.usdaSearchService.setSearchFilterToggle(!this.searchFilterToggle);
  }
}
