import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UsdaModule } from './modules/USDA/usda.module';
import { NutrishareModule } from './modules/Nutrishare/nutrishare.module';
import { AdminModule } from './modules/admin/admin.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,    
    HttpClientModule,
    ReactiveFormsModule,FormsModule,
    MaterialModule,
    FlexLayoutModule,
    UsdaModule,
    NutrishareModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
