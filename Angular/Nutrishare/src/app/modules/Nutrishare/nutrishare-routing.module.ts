import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutrishareComponent } from './components/nutrishare/nutrishare.component';

const routes: Routes = [
  {path: '', component: NutrishareComponent },
  {path: 'accountservices', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutrishareRoutingModule { }
