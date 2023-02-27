import { Component, Input, } from '@angular/core';
import { FoodSearchCriteriaModel } from 'src/app/modules/USDA/models/Search/FoodSearchCriteriaModel';
import { UsdaSearchService } from 'src/app/modules/USDA/services/search/usda-search.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  foodSearchCriteria: FoodSearchCriteriaModel;
  
  @Input() totalHits: number;
  @Input() currentPage: number;
  @Input() totalPages: number;

  constructor(private usdaSearchService: UsdaSearchService) { }

  ngOnInit() {
    this.initSubscriptions()
  }

  initSubscriptions() {
    this.usdaSearchService.foodSearchCriteriaSubject.subscribe(response => {
      this.foodSearchCriteria = response;
    });
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
