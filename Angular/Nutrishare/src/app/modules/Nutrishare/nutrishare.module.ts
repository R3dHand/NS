import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NutrishareRoutingModule } from './nutrishare-routing.module';

import { UsdaModule } from '../USDA/usda.module';


import { NavbarComponent } from './components/navbar/navbar.component';
import { NutrishareComponent } from './components/nutrishare/nutrishare.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NutrishareComponent,
  ],
  imports: [
    CommonModule,
    NutrishareRoutingModule,
    ReactiveFormsModule,FormsModule,
    MaterialModule,
    FlexLayoutModule,
    UsdaModule
  ],
  exports: [
    NutrishareComponent
  ]
})
export class NutrishareModule { }
