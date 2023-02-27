import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { UsdaRoutingModule } from './usda-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UsdaSearchComponent } from './components/search/usda/usda-search/usda-search.component';
import { SearchFormComponent } from './forms/search-form/search-form/search-form.component';
import { PaginationComponent } from 'src/app/shared/components/pagination.component';
import { SearchFilterComponent } from './forms/search-filter/search-filter.component';

@NgModule({
  declarations: [
    UsdaSearchComponent,
    SearchFormComponent,
    PaginationComponent,
    SearchFilterComponent
  ],
  imports: [
    CommonModule,
    // UsdaRoutingModule,
    ReactiveFormsModule,FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    UsdaSearchComponent,
    SearchFormComponent,
    SearchFilterComponent
  ]
})
export class UsdaModule { }
