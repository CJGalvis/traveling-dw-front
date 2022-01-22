import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJourneysComponent } from './detail-journeys.component';

describe('DetailJourneysComponent', () => {
  let component: DetailJourneysComponent;
  let fixture: ComponentFixture<DetailJourneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailJourneysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJourneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
