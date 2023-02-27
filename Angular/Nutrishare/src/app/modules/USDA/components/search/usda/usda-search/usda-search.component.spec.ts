import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdaSearchComponent } from './usda-search.component';

describe('UsdaSearchComponent', () => {
  let component: UsdaSearchComponent;
  let fixture: ComponentFixture<UsdaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsdaSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsdaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
