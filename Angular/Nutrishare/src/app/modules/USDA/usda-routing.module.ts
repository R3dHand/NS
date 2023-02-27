import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsdaSearchComponent } from './components/search/usda/usda-search/usda-search.component';

const routes: Routes = [
  {path: '', component: UsdaSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsdaRoutingModule { }
