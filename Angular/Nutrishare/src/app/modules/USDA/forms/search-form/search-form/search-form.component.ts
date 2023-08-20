import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FoodSearchCriteriaModel } from '../../../models/Search/FoodSearchCriteriaModel';
import { UsdaSearchService } from '../../../services/search/usda-search.service';
import { HomeComponentStoreService} from 'src/app/ComponentStore/HomeComponentStore/services/home.store.service';
import { UsdaStoreService } from '../../../ComponentStore/services/usda-store.service';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})

export class SearchFormComponent  {
  toggleSearchFilter: boolean;
  toggleSearchFilter$ = this.usdaStoreService.toggleSearchFilter$.subscribe(res => {this.toggleSearchFilter = res;});

  
  foodSearchCriteria: FoodSearchCriteriaModel;
  foodSearchCriteria$ = this.usdaStoreService.foodSearchCriteria$.subscribe(res => {
    this.foodSearchCriteria = res;
  });
  
  searchFormGroup = new FormGroup({
    query: new FormControl<string>('')
  });

  constructor(
    private usdaSearchService: UsdaSearchService,
    private usdaStoreService: UsdaStoreService
  ) {
  }

  ngOnInit() {
    this.initSubscriptions();
  }

  initSubscriptions() {
    this.searchFormGroup.get("query").valueChanges.subscribe(value => {
      this.foodSearchCriteria.query = value;
      this.usdaStoreService.updateFoodSearchCriteria(this.foodSearchCriteria)
    })
  }
  search() {
    this.usdaSearchService.search(this.foodSearchCriteria);
    this.usdaStoreService.updateSearchFilterToggle(true);
  }

  toggle() {
    this.usdaStoreService.updateSearchFilterToggle(!this.toggleSearchFilter);
  }
}
