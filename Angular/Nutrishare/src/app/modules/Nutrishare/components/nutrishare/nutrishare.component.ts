import { Component, OnInit } from '@angular/core';
import { UsdaStoreService } from 'src/app/modules/USDA/ComponentStore/services/usda-store.service';

@Component({
  selector: 'app-nutrishare',
  templateUrl: './nutrishare.component.html',
  styleUrls: ['./nutrishare.component.scss']
})
export class NutrishareComponent implements OnInit {
  toggleSearchFilter: boolean;
  toggleSearchFilter$ = this.usdaStoreService.toggleSearchFilter$.subscribe(res => {this.toggleSearchFilter = res;});

  constructor(private usdaStoreService: UsdaStoreService) { }

  ngOnInit(): void {
  }

}
