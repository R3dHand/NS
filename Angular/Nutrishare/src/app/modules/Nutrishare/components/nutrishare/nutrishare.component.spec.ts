import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrishareComponent } from './nutrishare.component';

describe('NutrishareComponent', () => {
  let component: NutrishareComponent;
  let fixture: ComponentFixture<NutrishareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrishareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutrishareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
