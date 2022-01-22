import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsJourneysComponent } from './results-journeys.component';

describe('ResultsJourneysComponent', () => {
  let component: ResultsJourneysComponent;
  let fixture: ComponentFixture<ResultsJourneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsJourneysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsJourneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
