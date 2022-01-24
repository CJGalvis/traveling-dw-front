import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPassengersComponent } from './control-passengers.component';

describe('ControlPassengersComponent', () => {
  let component: ControlPassengersComponent;
  let fixture: ComponentFixture<ControlPassengersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPassengersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPassengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
