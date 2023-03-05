import { Component, Input, } from '@angular/core';
import { FoodSearchCriteriaModel } from 'src/app/modules/USDA/models/Search/FoodSearchCriteriaModel';
import { UsdaSearchService } from 'src/app/modules/USDA/services/search/usda-search.service';
import { UsdaStoreService } from 'src/app/modules/USDA/ComponentStore/services/usda-store.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
    // selectors
    foodSearchCriteria: FoodSearchCriteriaModel;
    foodSearchCriteria$ = this.usdaStoreService.foodSearchCriteria$.subscribe(res => {
      debugger
    this.foodSearchCriteria = res;
  });

  @Input() totalHits: number;
  @Input() currentPage: number;
  @Input() totalPages: number;

  constructor(
    private usdaSearchService: UsdaSearchService,
    private usdaStoreService: UsdaStoreService
  ) {

    }

  ngOnInit() {
  }
 
  first() {
    this.foodSearchCriteria.pageNumber = 1;
    this.usdaSearchService.search(this.foodSearchCriteria);
  }

  previous() {
    this.foodSearchCriteria.pageNumber = this.currentPage - 1;
    this.usdaSearchService.search(this.foodSearchCriteria);
  }

  next() {
    this.foodSearchCriteria.pageNumber = this.currentPage + 1;
    this.usdaSearchService.search(this.foodSearchCriteria);
  }

    
  last() {
    // pageSize * pageNumber connot exceed 10,000
    if (this.foodSearchCriteria.pageSize * this.totalPages > 10000) {
      this.foodSearchCriteria.pageSize = (10000 / this.foodSearchCriteria.pageNumber);
    } else {
      this.foodSearchCriteria.pageNumber = this.totalPages;
    }

    this.usdaSearchService.search(this.foodSearchCriteria);
  }
}
