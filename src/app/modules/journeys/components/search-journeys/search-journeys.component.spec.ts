import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJourneysComponent } from './search-journeys.component';

describe('SearchJourneysComponent', () => {
  let component: SearchJourneysComponent;
  let fixture: ComponentFixture<SearchJourneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchJourneysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJourneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
