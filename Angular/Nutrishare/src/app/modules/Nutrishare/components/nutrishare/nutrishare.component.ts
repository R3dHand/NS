import { Component, OnInit } from '@angular/core';
import { UsdaSearchService } from 'src/app/modules/USDA/services/search/usda-search.service';

@Component({
  selector: 'app-nutrishare',
  templateUrl: './nutrishare.component.html',
  styleUrls: ['./nutrishare.component.scss']
})
export class NutrishareComponent implements OnInit {
  searchFilterToggle: boolean;

  constructor(private usdaSearchService: UsdaSearchService) { }

  ngOnInit(): void {
    this.usdaSearchService.searchFilterToggleSubject.subscribe(response => {
      this.searchFilterToggle = response;
    });
  }

}
