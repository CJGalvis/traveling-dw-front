import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersJourneysComponent } from './filters-journeys.component';

describe('FiltersJourneysComponent', () => {
  let component: FiltersJourneysComponent;
  let fixture: ComponentFixture<FiltersJourneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersJourneysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersJourneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
