import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationFlightComponent } from './reservation-flight.component';

describe('ReservationFlightComponent', () => {
  let component: ReservationFlightComponent;
  let fixture: ComponentFixture<ReservationFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
